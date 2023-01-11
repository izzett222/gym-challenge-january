import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const data = [
    {
      title: "Audience",
      links: ["Students", "Employees", "Alumni and supporters", "Industry"],
    },
    {
      title: "Formalities",
      links: [
        "Legal notice",
        "Privacy notice",
        "Accessibility",
        "Certificates",
      ],
    },
    {
      title: "Formalities",
      links: [
        "Contact",
        "Press",
        "Jobs",
        "Apply for a Doctorate or Postdoc",
        "Uni-Shop",
      ],
    },
    {
      title: "Organization",
      links: [
        "Faculties and Institutes",
        "Facilities",
        "Central Administration",
      ],
    },
  ];
  return (
    <footer className="bg-[#333333] px-[15px] py-10">
      <div className="flex  flex-col lg:flex-row gap-y-5 mb-8 gap-x-10">
      <div className="pr-[15px]">
        <Image src="/icons/logo.svg" alt="" width={222} height={45} />
      </div>
        <div className="flex gap-5 justify-center flex-1 px-3 text-white flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[13px] after:h-[26px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1235px_0px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Facebook</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[26px] after:h-[26px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1285px_-36px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Instagram</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[26px] after:h-[22px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1285px_0px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Twitter</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[26px] after:h-[26px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1251px_-36px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Mastadon</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[22px] after:h-[26px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1420px_0px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Youtube</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[26px] after:h-[26px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1326px_-36px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">Linkedin</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[60px] h-[60px] border-2 border-white rounded-full after:absolute after:top-1/2 after:left-1/2 after:w-[41px] after:h-[12px] after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[-1370px_0px] after:bg-[length:1450px_110px] after:bg-[url('/icons/all-icon.svg')]"></div>
            <p className="text-white font-light text-[15px]">USUS-Blog</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[750px] lg:max-w-[960px]">
        <div className="flex flex-wrap -mx-5">
          {data.map((el, i) => {
            return (
              <div key={i} className="w-full md:w-1/2 lg:w-1/4 mt-[30px] px-5">
                <h3 className="text-white mb-2 text-base">{el.title}</h3>
                <div className="flex flex-col gap-1.5">
                  {el.links.map((link, j) => {
                    return (
                      <Link
                        href={"/"}
                        className="text-white underline font-light "
                        key={i}
                      >
                        {link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
