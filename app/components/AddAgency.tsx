import Image from "next/image";
import { Button } from "./buttons/Button";
import city from "@/public/city-image.png";
import Link from "next/link";

export default function AddAgency() {
  return (
    <div className=" my-28 ">
      <div className="flex justify-center flex-col items-center">
        <h5 className="font-bold text-lg text-[#302f2fc7] ">Add an Agency</h5>
        <h1 className="font-bold text-[32px] text-[#302f2fc7] pb-8">
          Want To List Your Agency?
        </h1>
        <Link href="/addagency">
          <Button variant="primary">Create a Listing</Button>
        </Link>
      </div>
    </div>
  );
}
