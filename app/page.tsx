
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import MyTabs from "./components/Tab";
import FeauturedAgencies from "./components/FeauturedAgencies";
import Ranking from "./components/Ranking";
import AddAgency from "./components/AddAgency";
import Nav from "./components/Nav";
import Explore from "./components/Explore";
import Example from "./components/HorizontalScroll";
import Working from "./components/Working";
import Product from "./components/Product";
import Products2 from "./components/Products2";
import Services from "./components/Services";




export default function Home() {
 
  return (
    <main className="">
      <Hero />
      <Explore />
      <div className="mt-20 ">{/* <MyTabs /> */}</div>
      {/* <Example/> */}
      <Services/>
      <FeauturedAgencies />

      <Working />
      {/* <Ranking /> */}
      <AddAgency />
    </main>
  );
}

