import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format, setYear, setMonth } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomDatePickerProps {
  field: any;
  label: string;
}

export function CustomDatePicker({ field, label }: CustomDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    field.value,
  );
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleYearChange = (year: string) => {
    const newDate = setYear(currentMonth, parseInt(year));
    setCurrentMonth(newDate);
    if (selectedDate) {
      const updatedDate = setYear(selectedDate, parseInt(year));
      setSelectedDate(updatedDate);
      field.onChange(updatedDate);
    }
  };

  const handleMonthChange = (month: string) => {
    const newDate = setMonth(currentMonth, months.indexOf(month));
    setCurrentMonth(newDate);
    if (selectedDate) {
      const updatedDate = setMonth(selectedDate, months.indexOf(month));
      setSelectedDate(updatedDate);
      field.onChange(updatedDate);
    }
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <label htmlFor={field.name} className="text-right">
        {label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !field.value && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex items-center justify-between p-2">
            <Select
              onValueChange={handleMonthChange}
              value={format(currentMonth, "MMMM")}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={handleYearChange}
              value={currentMonth.getFullYear().toString()}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              field.onChange(date);
            }}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
