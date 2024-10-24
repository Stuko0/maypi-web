import Header from "@/components/Header";
import Overview from "@/components/Overview";
import Guides from "@/components/Guides";
import Helps from "@/components/Helps";
import Footer from "@/components/Footer";
import Wall from "@/components/Wall";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen w-full pb-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <Overview/>
      <Guides/>
      <Helps/>
      <Wall/>
      <News/>
      <Footer/>
    </div>
  );
}
