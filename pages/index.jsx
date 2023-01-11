import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Info from "../components/sections/Info";
import News from "../components/sections/News";
import Programs from "../components/sections/Programs";

export default function Home() {
  return (
    <div className="bg-[#DDDDDD] min-h-screen">
      <div className="max-w-[1170px] mx-auto relative">
        <Header />
        <Hero />
        <Programs />
        <News />
        <Info />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
