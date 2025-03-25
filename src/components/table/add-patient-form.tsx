"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { differenceInYears, differenceInMonths } from "date-fns";
import { ReportData } from "@/components/types";
import { CustomDatePicker } from "@/components/custom-date-picker";

interface AddPatientFormProps {
  onAddPatient: (data: Partial<ReportData>) => void;
}

export function AddPatientForm({ onAddPatient }: AddPatientFormProps) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");
  const { control, register, handleSubmit, reset, watch } =
    useForm<Partial<ReportData>>();

  const dateOfBirth = watch("Date_of_Birth");
  const dateOfTesting = watch("Date_of_Testing");

  useEffect(() => {
    if (dateOfBirth) {
      const today = dateOfTesting ? new Date(dateOfTesting) : new Date();
      const birthDate = new Date(dateOfBirth);
      const years = differenceInYears(today, birthDate);
      const months = differenceInMonths(today, birthDate) % 12;
      setAge(`${years} years and ${months} months`);
    } else {
      setAge("");
    }
  }, [dateOfBirth, dateOfTesting]);

  const onSubmit = (data: Partial<ReportData>) => {
    onAddPatient({
      ...data,
      Age: age,
      Years: dateOfBirth
        ? differenceInYears(
            new Date(dateOfTesting || new Date()),
            new Date(dateOfBirth)
          )
        : 0,
      Month: dateOfBirth
        ? differenceInMonths(
            new Date(dateOfTesting || new Date()),
            new Date(dateOfBirth)
          ) % 12
        : 0,
    });
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Patient</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Patient</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="tests">Test Information</TabsTrigger>
              <TabsTrigger value="scores">Test Scores</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" {...register("Name")} />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="gender" className="text-right">
                  Gender
                </Label>
                <Input
                  id="gender"
                  className="col-span-3"
                  {...register("Gender")}
                />
              </div>

              <Controller
                control={control}
                name="Date_of_Testing"
                render={({ field }) => (
                  <CustomDatePicker field={field} label="Date of Testing" />
                )}
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="class" className="text-right">
                  Class
                </Label>
                <Input
                  id="class"
                  className="col-span-3"
                  {...register("Class")}
                />
              </div>

              <Controller
                control={control}
                name="Date_of_Birth"
                render={({ field }) => (
                  <CustomDatePicker field={field} label="Date of Birth" />
                )}
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="age" className="text-right">
                  Age
                </Label>
                <Input
                  id="age"
                  className="col-span-3"
                  value={age}
                  readOnly
                  {...register("Age")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Informant" className="text-right">
                  Informant
                </Label>
                <Input
                  id="Informant"
                  className="col-span-3"
                  {...register("Informant")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="School_Name" className="text-right">
                  School Name
                </Label>
                <Input
                  id="School_Name"
                  className="col-span-3"
                  {...register("School_Name")}
                />
              </div>
            </TabsContent>

            <TabsContent value="tests" className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Tests_Administered" className="text-right">
                  Tests Administered
                </Label>
                <Input
                  id="Tests_Administered"
                  className="col-span-3"
                  {...register("Tests_Administered")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Other_Test" className="text-right">
                  Other Test
                </Label>
                <Input
                  id="Other_Test"
                  className="col-span-3"
                  {...register("Other_Test")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reading_age" className="text-right">
                  Reading Age
                </Label>
                <Input
                  id="reading_age"
                  className="col-span-3"
                  {...register("reading_age")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="below_than" className="text-right">
                  Below Than
                </Label>
                <Input
                  id="below_than"
                  className="col-span-3"
                  {...register("below_than")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Spelling_age" className="text-right">
                  Spelling Age
                </Label>
                <Input
                  id="Spelling_age"
                  className="col-span-3"
                  {...register("Spelling_age")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="below_than1" className="text-right">
                  Below Than (1)
                </Label>
                <Input
                  id="below_than1"
                  className="col-span-3"
                  {...register("below_than1")}
                />
              </div>
            </TabsContent>

            <TabsContent value="scores" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Verbal_quotient" className="text-right">
                    Verbal Quotient
                  </Label>
                  <Input
                    id="Verbal_quotient"
                    type="number"
                    {...register("Verbal_quotient", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="suggests" className="text-right">
                    Suggests
                  </Label>
                  <Input id="suggests" {...register("suggests")} />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Information" className="text-right">
                    Information
                  </Label>
                  <Input
                    id="Information"
                    type="number"
                    {...register("Information", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Information_Level" className="text-right">
                    Information Level
                  </Label>
                  <Input
                    id="Information_Level"
                    {...register("Information_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Comprehension" className="text-right">
                    Comprehension
                  </Label>
                  <Input
                    id="Comprehension"
                    type="number"
                    {...register("Comprehension", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Comprehension_Level" className="text-right">
                    Comprehension Level
                  </Label>
                  <Input
                    id="Comprehension_Level"
                    {...register("Comprehension_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Arithmetic" className="text-right">
                    Arithmetic
                  </Label>
                  <Input
                    id="Arithmetic"
                    type="number"
                    {...register("Arithmetic", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Arithmetic_Level" className="text-right">
                    Arithmetic Level
                  </Label>
                  <Input
                    id="Arithmetic_Level"
                    {...register("Arithmetic_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Similarities" className="text-right">
                    Similarities
                  </Label>
                  <Input
                    id="Similarities"
                    type="number"
                    {...register("Similarities", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Similarities_Level" className="text-right">
                    Similarities Level
                  </Label>
                  <Input
                    id="Similarities_Level"
                    {...register("Similarities_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Digit_Span" className="text-right">
                    Digit Span
                  </Label>
                  <Input
                    id="Digit_Span"
                    type="number"
                    {...register("Digit_Span", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Digit_Span_Level" className="text-right">
                    Digit Span Level
                  </Label>
                  <Input
                    id="Digit_Span_Level"
                    {...register("Digit_Span_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="performance_quotient" className="text-right">
                    Performance Quotient
                  </Label>
                  <Input
                    id="performance_quotient"
                    type="number"
                    {...register("performance_quotient", {
                      valueAsNumber: true,
                    })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label
                    htmlFor="performance_quotient_Level"
                    className="text-right"
                  >
                    Performance Quotient Level
                  </Label>
                  <Input
                    id="performance_quotient_Level"
                    {...register("performance_quotient_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Picture_Completion" className="text-right">
                    Picture Completion
                  </Label>
                  <Input
                    id="Picture_Completion"
                    type="number"
                    {...register("Picture_Completion", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label
                    htmlFor="Picture_Completion_Level"
                    className="text-right"
                  >
                    Picture Completion Level
                  </Label>
                  <Input
                    id="Picture_Completion_Level"
                    {...register("Picture_Completion_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Block_Design" className="text-right">
                    Block Design
                  </Label>
                  <Input
                    id="Block_Design"
                    type="number"
                    {...register("Block_Design", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Block_Design_Level" className="text-right">
                    Block Design Level
                  </Label>
                  <Input
                    id="Block_Design_Level"
                    {...register("Block_Design_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Object_Assembly" className="text-right">
                    Object Assembly
                  </Label>
                  <Input
                    id="Object_Assembly"
                    type="number"
                    {...register("Object_Assembly", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Object_Assembly_Level" className="text-right">
                    Object Assembly Level
                  </Label>
                  <Input
                    id="Object_Assembly_Level"
                    {...register("Object_Assembly_Level")}
                  />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Coding" className="text-right">
                    Coding
                  </Label>
                  <Input
                    id="Coding"
                    type="number"
                    {...register("Coding", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Coding_Level" className="text-right">
                    Coding Level
                  </Label>
                  <Input id="Coding_Level" {...register("Coding_Level")} />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Mazes" className="text-right">
                    Mazes
                  </Label>
                  <Input
                    id="Mazes"
                    type="number"
                    {...register("Mazes", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Mazes_Level" className="text-right">
                    Mazes Level
                  </Label>
                  <Input id="Mazes_Level" {...register("Mazes_Level")} />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Overall_Quotient" className="text-right">
                    Overall Quotient
                  </Label>
                  <Input
                    id="Overall_Quotient"
                    type="number"
                    {...register("Overall_Quotient", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Overall_Level" className="text-right">
                    Overall Level
                  </Label>
                  <Input id="Overall_Level" {...register("Overall_Level")} />
                </div>

                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Points" className="text-right">
                    Points
                  </Label>
                  <Input
                    id="Points"
                    type="number"
                    {...register("Points", { valueAsNumber: true })}
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <Label htmlFor="Final_Level" className="text-right">
                    Final Level
                  </Label>
                  <Input id="Final_Level" {...register("Final_Level")} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Summery" className="text-right">
                  Summary
                </Label>
                <Textarea
                  id="Summery"
                  className="col-span-3"
                  {...register("Summery")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Recomodations" className="text-right">
                  Recommendation 1
                </Label>
                <Textarea
                  id="Recomodations"
                  className="col-span-3"
                  {...register("Recomodations")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Recomodations_2" className="text-right">
                  Recommendation 2
                </Label>
                <Textarea
                  id="Recomodations_2"
                  className="col-span-3"
                  {...register("Recomodations_2")}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Recomodations_3" className="text-right">
                  Recommendation 3
                </Label>
                <Textarea
                  id="Recomodations_3"
                  className="col-span-3"
                  {...register("Recomodations_3")}
                />
              </div>
            </TabsContent>
          </Tabs>

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
