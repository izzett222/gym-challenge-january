import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const data = [
    {
      img: "/images/contact1.jpg",
      title: "Dezernat Internationales",
    },
  ];
  return (
    <div className="bg-white px-[15px] py-16">
      <div className="mx-auto max-w-[750px] lg:max-w-[960px]">
        <h2>Contact</h2>
        <div className="flex flex-wrap gap-6 mt-8">
          <div className="flex-1 border-2 px-3 border-black p-[30px] flex flex-col">
            <div className="relative w-[150px] mb-10 h-[150px] self-center rounded-full overflow-hidden">
              <Image src={"/images/contact1.jpg"} fill alt="" />
            </div>
            <div>
              <h3 className="font-bold text-[22px] leading-[29px] mb-5 text-[#333333]">
                Dezernat <br /> Internationales
              </h3>
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href={"/"}
                  className="flex gap-2.5 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image
                    src="/icons/letter.svg"
                    alt=""
                    width={26}
                    height={20}
                  />
                  Profile Page
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-2 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image src="/icons/phone.svg" alt="" width={20} height={20} />
                  +49 711 685 68566
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-2 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image src="/icons/email.svg" alt="" width={22} height={16} />
                  Write e-mail
                </Link>
                <div>
                  <Link
                    href={"/"}
                    className="inline-flex gap-2 underline hover:no-underline text-[#333333] font-light"
                  >
                    <Image
                      src="/icons/query.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    Office hours (online)
                  </Link>
                  <span className="text-[15px] leading-[1.4] text-[#333333] font-light relative -top-1.5">
                    : Mon & Wed 10 a.m. to noon; Office hours (on site): Mon &
                    Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 border-2 border-black p-[30px] flex flex-col">
            <div className="relative w-[150px] mb-10 h-[150px] self-center rounded-full overflow-hidden">
              <Image src={"/images/contact2.jpg"} fill alt="" />
            </div>
            <div>
              <h3 className="font-bold text-[22px] leading-[29px] mb-5 text-[#333333]">
              Student Counseling <br /> Center
              </h3>
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href={"/"}
                  className="flex gap-2.5 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image
                    src="/icons/letter.svg"
                    alt=""
                    width={26}
                    height={20}
                  />
                  Profile Page
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-2 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image src="/icons/phone.svg" alt="" width={20} height={20} />
                  +49 711 685 82133
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 sm:min-w-[100%] lg:min-w-[initial] lg:flex-1 border-2 border-black p-[30px] flex flex-col sm:flex-row items-center lg:items-[initial] gap-5 lg:gap-0 lg:flex-col">
            <div className="relative w-[150px] mb-10 h-[150px] self-center rounded-full overflow-hidden">
              <Image src={"/images/contact2.jpg"} fill alt="" />
            </div>
            <div>
              <h3 className="font-bold text-[22px] leading-[29px] text-[#333333]">
                Student Service and <br className="hidden lg:block" /> Examination Office
              </h3>
              <span className="text-[15px] leading-[1.3] mt-2.5 inline-block text-[#333333] font-light relative -top-1.5 mb-2">
                Pfaffenwaldring 5 c, 70569 Stuttgart, House of students
              </span>
              <div className="flex flex-col gap-3">
                <Link
                  href={"/"}
                  className="flex gap-2.5 underline hover:no-underline text-[#333333] font-light"
                >
                  <Image
                    src="/icons/letter.svg"
                    alt=""
                    width={26}
                    height={20}
                  />
                  Further information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
