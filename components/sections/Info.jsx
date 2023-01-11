import Image from "next/image";

export default function Info() {
  const data = [
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
    {
      title: "All study programs",
      description:
        "On the webpages of your degree program you will find information on the study program structure,",
    },
  ];
  return (
    <div className="bg-white pt-8">
      <div className="bg-[#004192] py-10 px-[15px]">
        <div className="mx-auto max-w-[750px] lg:max-w-[960px]">
          <h2 className="text-white font-bold">Information for students</h2>
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10 mt-8">
            {
                data.map((el, i) => {
                    return <div key={i}>
                        <div className="flex gap-3 items-center text-white group hover:cursor-pointer">
                        <div className="min-w-[60px] h-[60px] lg:min-w-[130px] group-hover:bg-white justify-center items-center flex lg:h-[130px] border-2 border-white bg-transpent rounded-full">
                            <Image src={"/icons/white-right-arrow.svg"} alt="" width={24} height={36} />
                        </div>
                            
                            <div>
                                <h3 className="text-white font-bold mb-1">{el.title}</h3>
                                <p className="text-white">{el.description}</p>
                            </div>
                        </div>

                    </div>
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
