
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import MyTabs from "./components/Tab";
import FeauturedAgencies from "./components/FeauturedAgencies";
import Ranking from "./components/Ranking";
import AddAgency from "./components/AddAgency";
import Nav from "./components/Nav";


export default function Home() {
 
  return (
    <main className="">
      <Hero />

      <div className="mt-20 ">
        <MyTabs />
      </div>
      <FeauturedAgencies />
      <Ranking />
      <AddAgency />
    </main>
  );
}

