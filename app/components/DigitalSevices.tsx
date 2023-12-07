import Image from "next/image";
import social from "@/public/social-media-marketing300px.png";
import design from "@/public/DESIGN-300.png";
import webdesign from "@/public/web-design-300.png";
import { CiCircleChevRight } from "react-icons/ci";
import { staggerContainer, textVariant, fadeIn } from "@/app/api/Motion";
import { motion } from "framer-motion";
export default function DigitalSevices() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="grid sm:grid-cols-3 grid-cols-1 px-[6%] 2xl:px-0 max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center flex-col font-nunito">
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="">
            <Image src={social} alt="social" />
          </motion.div>

          <motion.h4
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="font-semibold"
          >
            Social Media Marketing
          </motion.h4>
          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-nunito">
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="">
            {" "}
            <Image src={design} alt="social" />
          </motion.div>

          <motion.h4
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="font-semibold"
          >
            Design (UI/UX)
          </motion.h4>
          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-nunito">
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="">
            {" "}
            <Image src={webdesign} alt="social" />
          </motion.div>

          <motion.h4
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="font-semibold"
          >
            Webiste Development
          </motion.h4>

          <div className="flex gap-2 items-center mt-3">
            <h4 className="text-blue-700 font-semibold">Find agency</h4>
            <CiCircleChevRight className="text-[25px] text-blue-700" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
