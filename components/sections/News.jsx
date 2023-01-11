import Image from "next/image";
export default function News() {
  const data = [
    {
      img: null,
      title: "Newsticker: Information on the coronavirus",
      tag: "Article | 11/10/22",
      description: null,
    },
    {
      img: "/images/news1.jpg",
      description: null,
      tag: "Video | YouTube",
      title:
        'Latest episode: "Intelligent systems will help us in crises and in the future',
    },
    {
      img: "/images/news2.jpg",
      title: null,
      tag: "USUS blog | 11/10/22",
      description:
        "Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips.",
    },
    {
      img: null,
      title: "Impressive research in the field of business administration",
      tag: "News | 11/10/22",
      description: null,
    },
    {
      img: "/images/news3.jpg",
      title:
        "The University of Stuttgart's five most beautiful Instagram pictures",
      tag: "Article | 11/10/22",
      description: null,
    },
    {
      img: "/images/news4.jpg",
      title: "Energy savings in November",
      tag: "Article | 11/10/22",
      description: null,
      rounded: true,
    },
    {
      img: "/images/news5.jpg",
      title: "Sim & Tech solve their 3rd case",
      tag: "News | 11/10/22",
      description: null,
      rounded: true,
    },
    {
      img: "/images/news6.jfif",
      title: "Diversity calendar makes diversity visible",
      tag: "News | 11/10/22",
      description: null,
    },
    {
      img: null,
      title:
        "General questions: Limited office hours December 22, 2022 - January 6, 2023",
      tag: "News | 11/10/22",
      description: null,
    },
  ];
  return (
    <div className="bg-[#333333] px-[15px] pb-20">
      <div className="mx-auto max-w-[750px] lg:max-w-[960px] pt-10">
        <h2 className="text-white">News and events for students</h2>
        <div className="grid grid-rows-6- mt-5 mb-10  sm:grid-cols-2 md:grid-cols-3 gap-[30px] justify-center ">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className={`${
                  el.img ? "row-span-2-" : "row-span-1-"
                } flex flex-col  bg-white ${!el.img && 'h-fit self-start'}`}
              >
                {el.img ? (
                  <div className="relative aspect-[7/5]">
                    {" "}
                    <Image src={el.img} alt="" fill />
                  </div>
                ) : null}
                <div className="py-[30px] px-5">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p>{el.tag}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-10 flex-wrap">
        {["All news", "all events"].map((el, i) => {
            return (
                <button key={i} className="border-white border-2 font-medium uppercase bg-transparent px-[35px] py-4 text-white"><span className="font-medium uppercase">{el}</span></button>
            )
        })}
      </div>
    </div>
  );
}
