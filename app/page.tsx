import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import MyTabs from "./components/Tab";
import FeauturedAgencies from "./components/FeauturedAgencies";
import Ranking from "./components/Ranking";
import AddAgency from "./components/AddAgency";
interface HomeProps {
  todos: Task[];
}
export default function Home({todos}:HomeProps) {
  return (
    <main className="">
      <Hero />
      <div className="mt-20 ">
        <MyTabs />
      </div>
      <FeauturedAgencies todos={todos} />
      <Ranking />
      <AddAgency />
    </main>
  );
}

