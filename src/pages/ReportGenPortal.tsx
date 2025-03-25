import { PatientDataTable } from "@/components/table/patient-data-table";
import { QueryClientProvider } from "@/components/query-client-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Checkbox2 } from "@/components/ui/checkbox2";
import { Check } from "lucide-react";
import JenkinsStyleCheckbox from "@/components/jenkinsstylecheckbox";

export default function ReportGenPortal() {
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );
  // <CheckIcon className="bg-primary size-[20px] border-0 rounded" />;
  return (
    <>
      {/* <Check className="h-4 w-4" />
      <Checkbox2 /> */}
      {/* <JenkinsStyleCheckbox /> */}
      {/* <Checkbox className="bg-white transition ease-in-out" /> */}
      <div className="container mx-auto py-10">
        <QueryClientProvider>
          <PatientDataTable />
        </QueryClientProvider>
      </div>
    </>
  );
}
