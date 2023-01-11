import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#00BEFF] px-[15px]">
      <div className="max-w-[750px] lg:max-w-[960px] md:h-[320px] mx-auto flex flex-col md:flex-row gap-5 py-10">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="mb-3">Students</h1>
          <p className="font-light">
            Important news, links, documents, and tips for students of the
            University of Stuttgart: This page offers information on your
            studies.
          </p>
        </div>
        <div className="bg-[#333] group self-end w-[190px] h-[190px] lg:w-[270px] hover:bg-white lg:h-[270px] rounded-[50%] flex-col hidden md:flex justify-center items-center relative lg:-bottom-[60px]">
          <p className="uppercase text-xs text-center lg:text-left lg:text-sm max-w-[130px] lg:max-w-[200px] text-white group-hover:text-[#333]">
            INFORMATION FOR PROSPECTIVE STUDENTS
          </p>
          <Image
            src="/icons/white-right-arrow.svg"
            className="absolute bottom-4 mx-auto"
            alt=""
            width={8}
            height={14}
          />
        </div>
        <div className="flex md:hidden items-center">
          <div className=" p-5">
            <Image src="/icons/right-arrow.svg" alt="" width={16} height={24} />
          </div>

          <p className="uppercase underline font-semibold">
            INFORMATION FOR PROSPECTIVE STUDENTS
          </p>
        </div>
      </div>
    </div>
  );
}
