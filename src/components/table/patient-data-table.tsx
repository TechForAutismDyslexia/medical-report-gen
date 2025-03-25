"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddPatientForm } from "./add-patient-form";
import { columns } from "./columns";

import { ReportData } from "@/components/types";
import { host } from "@/config";

export function PatientDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<ReportData[]>({
    queryKey: ["patients"],
    queryFn: () =>
      axios.get(`${host}/patients`).then((res) => {
        return res.data.map((val: any) => new ReportData(val));
      }),
  });

  const addPatientMutation = useMutation({
    mutationFn: (newPatient: Partial<ReportData>) =>
      axios.post("/api/patients", newPatient),
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
    },
  });

  // const generateRepot = useQuery<ReportData[]>({
  //   queryKey: ["patients"],
  //   queryFn: () => axios.get(`${host}/patients`).then((res) => res.data),
  // });

  const generateReportMutation = useMutation({
    mutationFn: (selectedPatients: ReportData[]) => {
      console.log(selectedPatients);
      return axios.post(`${host}/generate?isclean=true`, selectedPatients, {
        responseType: "blob",
      });
    },
    onSuccess: (resp) => {
      const url = window.URL.createObjectURL(resp.data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "reports.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
  });
  console.log(data);
  const table = useReactTable({
    data: data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleGenerateReport = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    const selectedData = selectedRows.map((row) => row.original);
    generateReportMutation.mutate(selectedData);
  };

  if (isLoading) return <div className="text-gray-600">Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">An error occurred: {error.message}</div>
    );

  return (
    <div className="w-full bg-white">
      <div className="flex items-center py-4">
        <AddPatientForm
          onAddPatient={(data) => addPatientMutation.mutate(data)}
        />
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("Name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm ml-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <Button
          className="ml-auto bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleGenerateReport}
          disabled={table.getFilteredSelectedRowModel().rows.length === 0}
        >
          Generate Report
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-2 border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            >
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white border border-gray-200"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize text-gray-700 hover:bg-gray-100"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-gray-200">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-gray-50">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-gray-700">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-gray-700">
                      {(() => {
                        return flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )
                      })()}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-gray-600">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
