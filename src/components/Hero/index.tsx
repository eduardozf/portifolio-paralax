"use client";

import Image from "next/image";
import Header from "../Header/index";
import { useRef } from "react";

const HeroSection = () => {
  const farBGRef = useRef<any>();
  const nearBGRef = useRef<any>();
  const nearestBGRef = useRef<any>();

  const handleScroll = () => {
    const scrollY = window?.scrollY;

    farBGRef.current.style.backgroundPositionY = `${scrollY * 0.4}px`;
    nearBGRef.current.style.transform = `translateY(${scrollY * 0.8}px)`;
    nearestBGRef.current.style.transform = `translateY(${scrollY * 2}px)`;
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", handleScroll);

  return (
    <section
      className="h-screen w-full relative bg-img-third bg-no-repeat bg-[length:110%_auto] bg-[#CBAE97] overflow-hidden transition-smoothT duration-500 ease-smoothT"
      ref={farBGRef}
    >
      <Header />
      <div className="w-fit h-screen text-white flex items-center">
        <div className="h-fit relative py-[20px] px-[55px]">
          <div className="bg-extra-blur absolute inset-0 rounded-full backdrop-blur-sm z-0"></div>
          <h1 className="font-passionOne text-xxl uppercase relative z-10 leading-none">
            Web development inspired by Brazil
          </h1>
          <p className="text-lg font-light text-justify w-[920px] uppercase relative z-10 leading-tight">
            Websites that capture the colorful and vibrant essence of this land
            of enchantment and diversity, inviting the world to explore your
            unique brand.
          </p>
        </div>
      </div>
      <div className="absolute inset-0">
        <Image
          src={"/assets/second_bg.webp"}
          height={365}
          width={1374}
          alt="Background Image"
          quality={100}
          className="absolute right-0 bottom-0 w-auto h-[365px] pointer-events-none transition-smoothT duration-smoothT ease-smoothT"
          ref={nearBGRef}
        />
        <Image
          src={"/assets/first_bg.webp"}
          height={1001}
          width={1028}
          alt="Macaw Image"
          quality={100}
          className="absolute right-0 bottom-0 w-auto h-[888px] pointer-events-none transition-smoothT duration-smoothT ease-smoothT"
          ref={nearestBGRef}
        />
      </div>
    </section>
  );
};

export default HeroSection;
