import Image from "next/image";
import Header from "@/components/Header";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen w-full pb-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <Overview/>
    </div>
  );
}
