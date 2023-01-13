import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Info from "../components/sections/Info";
import News from "../components/sections/News";
import Programs from "../components/sections/Programs";

export default function Home() {
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
    <div className="bg-[#DDDDDD] min-h-screen">
      <div className="max-w-[1170px] mx-auto relative bg-[#DDDDDD] ">
        <Header scrolled={scrolled} />
        <Hero scrolled={scrolled} />
        <Programs />
        <News />
        <Info />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
