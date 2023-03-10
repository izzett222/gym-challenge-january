import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false);
  const data = [
    {
      text: "All student programs",
      href: "/programs",
    },
    {
      text: "Starting out",
      href: "/starting",
    },
    {
      text: "Study organization",
      href: "/organization",
    },
    {
      text: "Study Examination",
      href: "/study",
    },
    {
      text: "Digital Services",
      href: "/digital",
    },
    {
      text: "Financing & Stipends",
      href: "/",
    },
    {
      text: "International students in Stuttfart",
      href: "/",
    },
    {
      text: "Study Abroad",
      href: "/",
    },
    {
      text: "Counseling",
      href: "/",
    },
    {
      text: "Internships, mentoring and getting on the career ladder",
      href: "/",
    },
    {
      text: "Additional programs & further education during studies",
      href: "/",
    },
    {
      text: "Getting involved",
      href: "/",
    },
    {
      text: "University A-Z",
      href: "/",
    },
    {
      text: "Contact",
      href: "/",
    },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#DDDDDD] fixed top-0 left-0 right-0 z-40">
      <div className="max-w-[1170px] mx-auto relative">
        <header
          className={`${
            open ? "bg-[#303A3D] h-screen" : "bg-white"
          }  `}
        >
          <div
            className={`${
              scrolled ? "h-0 overflow-hidden" : "h-10"
            } transition-all z-10 duration-300 flex items-center bg-[#004191]`}
          >
            <div className="flex justify-end max-w-[750px] w-full lg:max-w-[960px]">
              <Link
                href={"/"}
                className="inline-flex text-xs gap-3 relative text-white items-center after:w-[20px] after:block after:h-[20px] after:bg-[-25px_0px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"
              >
                University of Stuttgart
              </Link>
            </div>
          </div>
          <div
            className={`flex justify-between ${
              scrolled ? "py-6" : "py-12"
            } transition-all duration-300 px-[15px] max-w-[750px] relative lg:max-w-[960px] mx-auto items-center`}
          >
            <div className="relative">
              {open ? (
                <Image src={"/icons/logo.svg"} alt="" width={222} height={45} />
              ) : (
                <Image
                  src={"/icons/logo-dark.svg"}
                  alt=""
                  width={222}
                  height={45}
                />
              )}
              <p
                className={`absolute left-[56px] -bottom-2 ${
                  open ? "text-white" : "text-[#333333]"
                }`}
              >
                For students
              </p>
            </div>
            <div className="flex gap-4 items-center">
              {open ? null : (
                <div>
                  <div className="sm:flex group flex-col items-center justify-center relative top-1.5 hidden border-transparent rounded-full h-[44px] w-[48px] border hover:border-black">
                    <div className="w-8 h-8 relative after:bg-[-198px_-76px] after:bg-[length:1450px_110px] after:block after:bg-[url('/icons/all-icon.svg')] after:w-8 after:h-8"></div>
                    <div className="w-[18px] h-[10px] relative after:bg-[-76px_1px] group-hover:hidden after:bg-[length:1450px_110px] after:block after:bg-[url('/icons/all-icon.svg')] after:w-8 after:h-8"></div>
                  </div>
                </div>
              )}
              {open ? (
                <div
                  className={`after:block  ${
                    open ? "block" : "hidden"
                  } -ml-2 hidden sm:inline-block after:bg-[-1200px_-38px] after:w-[27px] after:h-[27px] after:bg-[url('/icons/all-icon.svg')] after:bg-[length:1450px_110px]`}
                ></div>
              ) : null}

              {open ? null : (
                <div
                  className={`after:block ${
                    open ? "hidden" : "block"
                  } -ml-2 hidden sm:inline-block after:bg-[-1165px_-38px] after:w-[27px] after:h-[27px] after:bg-[url('/icons/all-icon.svg')] after:bg-[length:1450px_110px]`}
                ></div>
              )}
              <div
                onClick={handleOpen}
                className={`after:block ${
                  open ? "block" : "hidden"
                } after:bg-[-1135px_-38px] after:bg-[url('/icons/all-icon.svg')] after:w-6 after:h-[25px] after:bg-[length:1450px_110px]`}
              ></div>
              <Image
                src={"/icons/menu.svg"}
                onClick={handleOpen}
                alt=""
                width={36}
                height={36}
                className={`${open ? "hidden" : "block"}`}
              />
            </div>
          </div>
          <div
            className={`absolute ${
              scrolled ? "top-[90px]" : "top-[180px]"
            }  bottom-0 right-0 left-0 ${
              open ? "h-auto pb-10" : "h-0 overflow-hidden"
            } z-40 bg-[#303A3D] transition-all duration-100`}
          >
            <div className="max-w-[750px] lg:max-w-[960px] mx-auto">
              <div className="flex flex-col">
                <div className="bg-[#00BCFF] mb-10  h-1 w-20 mt-10"></div>
                <div className="flex-1 max-h-[440px] flex flex-col overflow-scroll">
                  {data.map((el, i) => {
                    return (
                      <Link
                        key={i}
                        className="flex items-center justify-between py-[19px] px-[7px] border-b group hover:bg-[#00BCFF] transition-colors duration-300 border-b-white"
                        href={el.href}
                      >
                        <span className="text-white text-xl group-hover:text-[#333]">
                          {el.text}
                        </span>
                        <div className="after:block after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')] after:bg-[-225px_0px] after:w-2 after:h-[14px] bg-opacity-50"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
