import FormPopUp from "@/components/FormPopUp";
import Table from "@/components/Table";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-7">
      <FormPopUp/>
      <Table/>
    </div>
  );
}
