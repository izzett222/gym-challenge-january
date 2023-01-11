import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-40">
      <div className="flex justify-between py-6 px-[15px] max-w-[750px] lg:max-w-[960px] mx-auto items-center">
        <div className="relative">
          <Image src={"/icons/logo-dark.svg"} alt="" width={222} height={45} />
          <p className="absolute left-[56px] -bottom-2 text-[#333333]">For students</p>
        </div>
        <div className="flex gap-4 items-center">
        <div className="sm:flex flex-col items-center relative top-1.5 hidden"> 
            <Image src={"/icons/translate.png"} alt="" width={32} height={32} />
            <Image src={"/icons/down-arrow.svg"} alt="" width={18} height={10} className="relative left-0.5" />
        </div>
          
          <Image src={"/icons/search.svg"}  className="hidden sm:inline-block" alt="" width={28} height={28} />
          <Image src={"/icons/menu.svg"} alt="" width={36} height={36} />
        </div>
      </div>
    </header>
  );
}
