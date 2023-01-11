import Image from "next/image";
import Link from "next/link";

export default function Programs() {
  const data = [
    {
      img: "/images/program1.jpg",
      title: "Digital services",
      links: [
        "C@MPUS - campus management and lectures",
        "How to C@MPUS",
        "ILIAS",
        "University library",
        "E-mail",
        "Further digital services",
      ],
    },
    {
      img: "/images/program2.jpg",
      title: "Organizing your studies",
      links: [
        "Getting started",
        "Formalities",
        "Exam organization",
        "Student Service and Examination Office",
        "Academic calendar",
        "Further digital services",
      ],
    },
    {
      img: "/images/program3.jpg",
      title: "University life",
      links: [
        "University life",
        "Studierendenwerk Stuttgart (Student Services)",
        "Internships, mentoring and career",
        "Campus map",
        "Lost property",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[750px] lg:max-w-[960px] px-[15px] pt-10 py-24">
        <form
          action="post"
          className="bg-[#EEEEEE] p-3 max-w-[736px] mx-auto mb-10"
        >
          <div className="flex flex-col px-3">
            <p className="mb-2 text-[#333333]">Begriff</p>
            <input
              type="text"
              className="px-3 mb-3 py-[14px]"
              placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
            />
            <button className="bg-[#004191] hover:bg-[#333333] text-white w-fit py-4 px-[35px]">
              begriff suchen
            </button>
          </div>
        </form>
        <div className="flex flex-wrap -mx-[15px] gap-y-16">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 px-[15px] flex flex-col"
              >
                <div className="relative w-full max-w-[245px] max-h-[245px] sm:max-h-[initial] sm:max-w-none sm:w-[310px] sm:h-[310px]  lg:w-[293px] h-[293px] sm:self-center">
                  <Image src={el.img} alt="" className="object-cover" fill />
                </div>
                <div>
                  <h3 className="my-5 font-semibold">{el.title}</h3>
                  <div className="flex flex-col gap-3">
                    {el.links.map((link, i) => {
                      return (
                        <Link
                          href={"/"}
                          className="flex items-center gap-1 text-[#004191] hover:underline font-semibold"
                          key={i}
                        >
                          <Image
                            width={15}
                            height={15}
                            alt=""
                            src={"/icons/right-arrow.svg"}
                          />
                          {link}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-[#004191] hover:bg-[#333333] text-white w-fit py-4 px-[35px]">
            Study programs&apos; webpages for students
          </button>
        </div>
      </div>
    </div>
  );
}
