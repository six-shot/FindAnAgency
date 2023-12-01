import Image from "next/image";
import pr from "@/public/pr-200.png";
import experimental from "@/public/experiential-200.png";
import media from "@/public/media-200.png";
import boutique from "@/public/boutique-200.png";
import { CiCircleChevRight } from "react-icons/ci";
export default function TraditionalServices() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 px-14 2xl:px-0 max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center flex-col font-nunito">
            <Image src={pr} alt="social" />
            <h4 className="font-semibold">Public Relation</h4>
            <div className="flex gap-2 items-center mt-3">
              <h4 className="text-blue-700 font-semibold">Find agency</h4>
              <CiCircleChevRight className="text-[25px] text-blue-700" />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col font-nunito">
            <Image src={experimental} alt="social" />
            <h4 className="font-semibold">Experimental</h4>
            <div className="flex gap-2 items-center mt-3">
              <h4 className="text-blue-700 font-semibold">Find agency</h4>
              <CiCircleChevRight className="text-[25px] text-blue-700" />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col font-nunito">
            <Image src={media} alt="social" />
            <h4 className="font-semibold">Media</h4>
            <div className="flex gap-2 items-center mt-3">
              <h4 className="text-blue-700 font-semibold">Find agency</h4>
              <CiCircleChevRight className="text-[25px] text-blue-700" />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col font-nunito">
            <Image src={boutique} alt="social" />
            <h4 className="font-semibold">Boutique</h4>
            <div className="flex gap-2 items-center mt-3">
              <h4 className="text-blue-700 font-semibold">Find agency</h4>
              <CiCircleChevRight className="text-[25px] text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
