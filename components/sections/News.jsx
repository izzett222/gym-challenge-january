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
        <div className="grid grid-rows-6- mt-5 mb-10  sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[30px]- justify-center ">
          <div className={`flex flex-col mb-[30px]`}>
            <div className="py-[30px] px-5 bg-white">
              <h3>Newsticker: Information on the coronavirus</h3>
              <p>Article | 11/10/22</p>
            </div>
          </div>
          <div className={`flex flex-col sm:row-span-2 md:row-span-2 bg-white mb-[30px]`}>
            <div className="relative flex-1">
              <Image src="/images/news1.jpg" alt="" fill />
            </div>
            <div className="p-[30px]">
              <h3>
                Latest episode: Intelligent systems will help us in crises and
                in the future
              </h3>
              <p>Video | YouTube</p>
            </div>
          </div>
          <div className={`flex flex-col row-span-2 bg-white mb-[30px]`}>
            <div className="relative aspect-[7/5]">
              <Image src="/images/news2.jpg" alt="" fill />
            </div>
            <div className="py-[30px] px-5">
              <p>
                Everyone feels sometimes stressed during their studies. But what
                can you do against it? Constanza has a few tips.
              </p>
              <p>USUS blog | 11/10/22</p>
            </div>
          </div>
          <div className={`hidden sm:flex flex-col bg-white mb-[30px] lg:-mt-[60px] h-fit`}>
            <div className="py-[30px] px-5 h-fit">
              <h3>Impressive research in the field of business administration</h3>
              <p>News | 11/10/22</p>
            </div>
          </div>
          <div className={`flex flex-col row-span-2 lg:-mt-[60px] bg-white mb-[30px]`}>
            <div className="relative aspect-[7/5]">
              <Image src="/images/news3.jpg" alt="" fill />
            </div>
            <div className="py-[30px] px-5">
              <h3>
              The University of Stuttgart&apos;s five most beautiful Instagram pictures
              </h3>
              <p>Article | 11/10/22</p>
            </div>
          </div>
          <div className={`hidden sm:flex flex-col row-span-2 bg-white mb-[30px]`}>
            <div className="relative aspect-[7/5]">
              <Image src="/images/news4.jpg" alt="" fill />
            </div>
            <div className="py-[30px] px-5">
              <h3>
              Energy savings in November
              </h3>
              <p>Article | 11/10/22</p>
            </div>
          </div>
          <div className={`hidden sm:flex flex-col row-span-2 bg-white mb-[30px]`}>
            <div className="relative aspect-[7/5]">
              <Image src="/images/news5.jpg" alt="" fill />
            </div>
            <div className="py-[30px] px-5">
              <h3>
              Sim & Tech solve their 3rd case
              </h3>
              <p>News | 11/10/22</p>
            </div>
          </div>
          <div className={`hidden sm:flex flex-col row-span-2 bg-white mb-[30px]`}>
            <div className="relative aspect-[7/5]">
              <Image src="/images/news5.jpg" alt="" fill />
            </div>
            <div className="py-[30px] px-5">
              <h3>
              Diversity calendar makes diversity visible
              </h3>
              <p>News | 11/10/22</p>
            </div>
          </div>
          <div className={`hidden sm:flex flex-col bg-white mb-[30px]`}>
            <div className="py-[30px] px-5">
              <h3>General questions: Limited office hours December 22, 2022 - January 6, 2023</h3>
              <p>News | 11/10/22</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-10 flex-wrap">
        {["All news", "all events"].map((el, i) => {
          return (
            <button
              key={i}
              className="border-white border-2 font-medium uppercase bg-transparent px-[35px] py-4 text-white"
            >
              <span className="font-medium uppercase">{el}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
