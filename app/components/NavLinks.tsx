import React, { useState } from "react";

import { links } from "./Mylinks";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="z-[999]" key={link.id}>
          <div className=" text-left md:cursor-pointer group  sm:text-xs text-base text-[#2F2F2F]  ">
            <h1
              className="sm:py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12  hidden group-hover:md:block hover:md:block">
                  <div className="bg-white py-4  px-5 w-[250px] ">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.id}>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-xs text-[#2F2F2F]   hover:bg-blue-200 px-6  py-[3px] "
                            key={slink.id}
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary  "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className=" pl-7 font-semibold md:pr-0 pr-5 font-silka text-base"
                  >
                    {slinks.Head}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className=" pl-14" key={slink.id}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
