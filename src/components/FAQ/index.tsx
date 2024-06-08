import Image from "next/image";
import FaqSection from "../FaqBox";
import FallingLeafs from "../Animations/FallingLeafs";
import SideLeaf from "../Animations/SideLeaft";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative min-h-screen w-full p-[110px] bg-green-d"
    >
      <FallingLeafs />

      <main className=" flex flex-col gap-[45px] bg-white w-full min-h-full rounded-xl relative bg-lines bg-contain bg-no-repeat bg-right">
        <FaqHeader />
        <div className="flex flex-1">
          <div className="w-1/2">
            <FaqSection></FaqSection>
          </div>
          <div className="w-1/2 pl-6 -translate-y-11 pointer-events-none ">
            <Image
              alt="Sloth Image"
              src="/assets/sloth.webp"
              width={783}
              height={545}
              className="w-auto h-[450px] pointer-events-none"
              quality={100}
            ></Image>
          </div>
        </div>
      </main>
      <SideLeaf />

      {/* <WalkingAnt /> */}
    </section>
  );
};

const FaqHeader = () => (
  <div className="flex flex-col justify-center items-center pt-[75px]">
    <h1 className="text-xl font-bold text-green-d">
      Frequently Asked Questions
    </h1>
    <h3 className="w-[530px] text-center text-gray-500 text-md font-light">
      Explore the Rich History, Diverse Wildlife, and Vibrant Culture of Brazil
      Through These Common Inquiries
    </h3>
  </div>
);

export default FAQSection;
