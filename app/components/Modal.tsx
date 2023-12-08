"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "./buttons/Button";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    services: [] as ReadonlyArray<{ value: string; label: string }>,
    servicesList: [
      {
        value: "Digital Marketing Agencies",
        label: "Digital Marketing Agencies",
      },
      { value: "Content Marketing", label: "Content Marketing" },
      { value: "Design", label: "Design" },
      { value: "Digital Marketing", label: "Digital Marketing" },
      { value: "Email Marketing", label: "Email Marketing" },
      { value: "Mobile Development", label: "Mobile Development" },
      { value: "Mobile Marketing", label: "Mobile Marketing" },
      {
        value: "Online Reputation Managemnet",
        label: "Online Reputation Managemnet",
      },
      { value: "Pay per Click Marketing", label: "Pay per Click Marketing" },
      {
        value: "Search Engine Optimization",
        label: "Search Engine Optimization",
      },
      { value: "Social Media Marketing", label: "Social Media Marketing" },
      { value: "Website Development", label: "Website Development" },
      { value: "Traditional Services", label: "Traditional Services" },
      { value: "Boutique", label: "Boutique" },
      { value: "Experiential", label: "Experiential" },
      { value: "Media", label: "Media" },
      { value: "Public Relations(PR)", label: "Public Relations(PR)" },
    ],
    about: "",
    phone_number: "",
    website: "",
    location: "",

    logo: null as File | null,
  });
  const [busy, setBusy] = useState(false);

  const {
    name,
    address,
    services,
    about,
    website,
    phone_number,
    location,

    logo,
  } = userInfo;

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setUserInfo({ ...userInfo, logo: file });
    }
  };
  const generateServiceLinks = () => {
    return services.map((service) => (
      <a key={service.value} href={`#${service.value}`}>
        {service.label}
      </a>
    ));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setBusy(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append(
      "services",
      userInfo.services.map((service) => service.value).join(",")
    );
    formData.append("about", about);
    formData.append("website", website);
    formData.append("phone_number", phone_number);
    formData.append("location", location);

    if (logo !== null) {
      formData.append("logo", logo);
    }

    try {
      const res = await fetch("https://gind-agencies.onrender.com/api/create", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setUserInfo({
          name: "",
          address: "",
          services: [] as { value: string; label: string }[],
          servicesList: [],
          about: "",
          phone_number: "",
          website: "",
          location: "",

          logo: null,
        });

        console.log("Listing created successfully!");
        toast.success("Deposit Successful!");
      } else {
        console.error("Failed to create listing.");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="">
        <Button onClick={openModal} variant="primary">
          Create a Listing
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full z-[999] max-w-xl transform overflow-hidden rounded-2xl bg-white p-6  text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit} className="">
                    <div className="flex justify-end items-end">
                      <IoMdClose
                        className="text-[25px] cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>
                    <h2 className="text-2xl my-2">Create LIsting</h2>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        Name<sup>*</sup>
                      </label>
                      <input
                        className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                        type="text"
                        value={name}
                        onChange={({ target }) =>
                          setUserInfo({ ...userInfo, name: target.value })
                        }
                      />
                    </div>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        Address<sup>*</sup>
                      </label>
                      <input
                        className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                        type="text"
                        value={address}
                        onChange={({ target }) =>
                          setUserInfo({ ...userInfo, address: target.value })
                        }
                      />
                    </div>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        Services<sup>*</sup>
                      </label>

                      <Select
                        isMulti
                        options={userInfo.servicesList}
                        value={userInfo.services}
                        onChange={(selectedOptions) =>
                          setUserInfo({
                            ...userInfo,
                            services: selectedOptions,
                          })
                        }
                      />
                    </div>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        About<sup>*</sup>
                      </label>
                      <input
                        className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                        type="text"
                        value={about}
                        onChange={({ target }) =>
                          setUserInfo({ ...userInfo, about: target.value })
                        }
                      />
                    </div>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        Website<sup>*</sup>
                      </label>
                      <input
                        className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                        type="text"
                        value={website}
                        onChange={({ target }) =>
                          setUserInfo({ ...userInfo, website: target.value })
                        }
                      />
                    </div>
                    <div className="sm:mb-6 mb-4">
                      <label className="mb-2 text-base">
                        Phone Number<sup>*</sup>
                      </label>
                      <input
                        className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                        type="text"
                        value={phone_number}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            phone_number: target.value,
                          })
                        }
                      />
                    </div>
                    <Select
                      options={[
                        // Your location options go here
                        { value: "Lagos Island", label: "Lagos Island" },
                        { value: "Lagos Mainland", label: "Lagos Mainland" },
                        { value: "Abuja", label: "Abuja" },
                        // Add more options as needed
                      ]}
                      value={
                        userInfo.location
                          ? {
                              value: userInfo.location,
                              label: userInfo.location,
                            }
                          : null
                      }
                      onChange={(selectedOption) =>
                        setUserInfo({
                          ...userInfo,
                          location: selectedOption ? selectedOption.value : "",
                        })
                      }
                      isSearchable={false} // Disable searching to make it a select
                      isClearable={true} // Allow clearing the selected option
                    />

                    <div className="sm:mb-6 mb-4 flex flex-col">
                      <label className="mb-2 text-base">Logo</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-2"
                      />
                    </div>

                    <div className="">
                      <button
                        className="w-[100%] text-lg h-[48px] bg-[#83C146] text-white rounded mb-4"
                        disabled={busy}
                        style={{ opacity: busy ? 0.5 : 1 }}
                      >
                        {busy ? "Creating Listing..." : "Create Listing"}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
