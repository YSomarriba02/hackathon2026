import BtnTab from "@/components/BtnTab";
import Tab from "@/components/Tab";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-700">
      <div className="p-2 w-full flex justify-between">
        <span className="text-2xl">Portico</span>
        <BtnTab></BtnTab>
      </div>
      <Tab></Tab>
    </main>
  );
}
