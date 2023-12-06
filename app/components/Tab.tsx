"use client"
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiWarehouseThin } from "react-icons/pi";
import DigitalSevices from "./DigitalSevices";
import TraditionalServices from "./TraditionalServices";

function MyTabs() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Tab.Group>
        <div className="">
          <Tab.List className="flex justify-center items-center mb-[33px] w-[100%] border-b border-gray-300 font-nunito">
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-6  text-white bg-blue-700 rounded-t-[4px] flex justify-center items-center flex-col "
                      : "px-5 py-4 text-gray-500 rounded-t-[4px]  text-base flex justify-center items-center flex-col "
                  }
                >
                  <AiOutlineFundProjectionScreen />
                  <h5>Digital Services</h5>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "py-4  px-6 text-white  bg-blue-700 rounded-t-[4px] flex justify-center items-center flex-col "
                      : "px-5 py-4 text-gray-500 rounded-t-[4px]  text-base flex justify-center items-center flex-col "
                  }
                >
                  <PiWarehouseThin />
                  <h5>Traditional Services</h5>
                </div>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <DigitalSevices />
          </Tab.Panel>
          <Tab.Panel>
   <TraditionalServices/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default MyTabs;
