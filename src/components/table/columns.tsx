"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import { ReportData } from "@/components/types";

// export type ReportData = {
//   id: string;
//   Name: string;
//   Gender: string;
//   Date_of_Testing: number;
//   Class: string;
//   Date_of_Birth: number;
//   // ... other fields as per the ReportData class
// };

export const columns: ColumnDef<ReportData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className=""
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        // className="border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Name",
    header: "Name",
    enableSorting: true
  },
  {
    accessorKey: "Gender",
    header: "Gender",
  },
  {
    accessorKey: "Date_of_Testing",
    header: "Date of Testing",
    size: 200,
  },
  {
    accessorKey: "Class",
    header: "Class",
  },
  {
    accessorKey: "Date_of_Birth",
    header: "Date of Birth",
  },
  {
    accessorKey: "Years",
    header: "Years",
  },
  {
    accessorKey: "Month",
    header: "Month",
  },
  {
    accessorKey: "Informant",
    header: "Informant",
  },
  {
    accessorKey: "Age",
    header: "Age",
  },
  {
    accessorKey: "School_Name",
    header: "School Name",
  },
  {
    accessorKey: "Tests_Administered",
    header: "Tests Administered",
  },
  {
    accessorKey: "Other_Test",
    header: "Other Test",
  },
  {
    accessorKey: "Verbal_quotient",
    header: "Verbal Quotient",
  },
  {
    accessorKey: "suggests",
    header: "Suggests",
  },
  {
    accessorKey: "Information",
    header: "Information",
  },
  {
    accessorKey: "Information_Level",
    header: "Information Level",
  },
  {
    accessorKey: "Comprehension",
    header: "Comprehension",
  },
  {
    accessorKey: "Comprehension_Level",
    header: "Comprehension Level",
  },
  {
    accessorKey: "Arithmetic",
    header: "Arithmetic",
  },
  {
    accessorKey: "Arithmetic_Level",
    header: "Arithmetic Level",
  },
  {
    accessorKey: "Similarities",
    header: "Similarities",
  },
  {
    accessorKey: "Similarities_Level",
    header: "Similarities Level",
  },
  {
    accessorKey: "Digit_Span",
    header: "Digit Span",
  },
  {
    accessorKey: "Digit_Span_Level",
    header: "Digit Span Level",
  },
  {
    accessorKey: "performance_quotient",
    header: "Performance Quotient",
  },
  {
    accessorKey: "performance_quotient_Level",
    header: "Performance Quotient Level",
  },
  {
    accessorKey: "Picture_Completion",
    header: "Picture Completion",
  },
  {
    accessorKey: "Picture_Completion_Level",
    header: "Picture Completion Level",
  },
  {
    accessorKey: "Block_Design",
    header: "Block Design",
  },
  {
    accessorKey: "Block_Design_Level",
    header: "Block Design Level",
  },
  {
    accessorKey: "Object_Assembly",
    header: "Object Assembly",
  },
  {
    accessorKey: "Object_Assembly_Level",
    header: "Object Assembly Level",
  },
  {
    accessorKey: "Coding",
    header: "Coding",
  },
  {
    accessorKey: "Coding_Level",
    header: "Coding Level",
  },
  {
    accessorKey: "Mazes",
    header: "Mazes",
  },
  {
    accessorKey: "Mazes_Level",
    header: "Mazes Level",
  },
  {
    accessorKey: "Overall_Quotient",
    header: "Overall Quotient",
  },
  {
    accessorKey: "Overall_Level",
    header: "Overall Level",
  },
  {
    accessorKey: "Points",
    header: "Points",
  },
  {
    accessorKey: "reading_age",
    header: "Reading Age",
  },
  {
    accessorKey: "below_than",
    header: "Below Than",
  },
  {
    accessorKey: "Spelling_age",
    header: "Spelling Age",
  },
  {
    accessorKey: "below_than1",
    header: "Below Than 1",
  },
  {
    accessorKey: "Summery",
    header: "Summary",
  },
  {
    accessorKey: "Final_Level",
    header: "Final Level",
  },
  {
    accessorKey: "Recomodations",
    header: "Recommendations",
  },
  {
    accessorKey: "Recomodations_2",
    header: "Recommendations 2",
  },
  {
    accessorKey: "Recomodations_3",
    header: "Recommendations 3",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const report = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 bg-white text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel className="text-gray-700">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              className="text-gray-700 hover:bg-gray-100"
              onClick={() => navigator.clipboard.writeText(report.Name)}
            >
              Copy patient ID
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem className="text-gray-700 hover:bg-gray-100">
              Generate report
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-700 hover:bg-gray-100">
              View patient
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    size: 100,
  },
];
