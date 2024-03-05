import FormPopUp from "@/components/FormPopUp";
import TableComponent from "@/components/Table";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-7 space-y-5">
      <FormPopUp/>
      <TableComponent/>
    </div>
  );
}
