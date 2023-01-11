import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changescrolled = () => {
      window.scrollY >= 80 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, []);
  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-40 anchored">
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
        } transition-all duration-300 px-[15px] max-w-[750px] lg:max-w-[960px] mx-auto items-center`}
      >
        <div className="relative">
          <Image src={"/icons/logo-dark.svg"} alt="" width={222} height={45} />
          <p className="absolute left-[56px] -bottom-2 text-[#333333]">
            For students
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="sm:flex flex-col items-center relative top-1.5 hidden">
            <Image src={"/icons/translate.png"} alt="" width={32} height={32} />
            <Image
              src={"/icons/down-arrow.svg"}
              alt=""
              width={18}
              height={10}
              className="relative left-0.5"
            />
          </div>

          <Image
            src={"/icons/search.svg"}
            className="hidden sm:inline-block"
            alt=""
            width={28}
            height={28}
          />
          <Image src={"/icons/menu.svg"} alt="" width={36} height={36} />
        </div>
      </div>
    </header>
  );
}
