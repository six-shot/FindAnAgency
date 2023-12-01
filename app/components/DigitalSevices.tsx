import Image from "next/image";
import social from "@/public/social-media-marketing300px.png";
import design from "@/public/DESIGN-300.png"
import webdesign from "@/public/web-design-300.png"
import { CiCircleChevRight } from "react-icons/ci";
export default function DigitalSevices() {
  return (
    <div>
      <div className="grid grid-cols-3 px-14 2xl:px-0 max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center flex-col font-nunito">
          <Image src={social} alt="social" />
          <h4 className="font-semibold">Social Media Marketing</h4>
          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-nunito">
          <Image src={design} alt="social" />
          <h4 className="font-semibold">Design (UI/UX)</h4>
          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-nunito">
          <Image src={webdesign} alt="social" />
          <h4 className="font-semibold">Webiste Development</h4>
          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
