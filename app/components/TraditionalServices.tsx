import Image from "next/image";
import { traditionalServices } from "../api/Data";
import { CiCircleChevRight } from "react-icons/ci";
import { staggerContainer, textVariant, fadeIn } from "@/app/api/Motion";
import { motion } from "framer-motion";
import Link from "next/link";
export default function TraditionalServices() {
  return (
    <div>
      <div>
        <div className="grid sm:grid-cols-4 grid-cols-1 px-[6%] 2xl:px-0 max-w-[1440px] mx-auto">
          {traditionalServices.map((service) => {
            return (
              <Link href={`/${service.services}`} key={service.id}>
                <div className="flex justify-center items-center flex-col font-nunito">
                  <motion.div
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className=""
                  >
                    <Image src={service.logo} alt="social" />
                  </motion.div>

                  <motion.h4
                    variants={fadeIn("up", "tween", 0.1, 1)}
                    className="font-semibold"
                  >
                    {service.name}
                  </motion.h4>
                  <div className="flex gap-2 items-center mt-3">
                    <h4 className="text-blue-700 font-semibold">Find agency</h4>
                    <CiCircleChevRight className="text-[25px] text-blue-700" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
