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

    if (
      !farBGRef?.current?.style ||
      !nearBGRef?.current?.style ||
      !nearestBGRef?.current?.style
    )
      return;

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
        <div
          className="h-fit relative lg:py-[15px] lg:px-[35px] 2xl:py-[20px]
2xl:px-[55px]"
        >
          <div className="bg-extra-blur absolute inset-0 rounded-full backdrop-blur-sm z-0"></div>
          <h1 className="font-passionOne lg:text-xl 2xl:text-xxl uppercase relative z-10 leading-none">
            Web development inspired in Brazil
          </h1>
          <p className="lg:text-md 2xl:text-lg font-light text-justify lg:w-[610px] 2xl:w-[920px] uppercase relative z-10 leading-tight">
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
          className="absolute right-0 bottom-0 w-auto lg:h-[260px] 2xl:h-[365px] pointer-events-none transition-smoothT duration-smoothT ease-smoothT"
          ref={nearBGRef}
        />
        <Image
          src={"/assets/first_bg.webp"}
          height={1001}
          width={1028}
          alt="Macaw Image"
          quality={100}
          className="absolute right-0 bottom-0 w-auto lg:h-[600px] 2xl:h-[888px] pointer-events-none transition-smoothT duration-smoothT ease-smoothT"
          ref={nearestBGRef}
        />
      </div>
      <div className="mouse absolute lg:scale-[40%] 2xl:scale-50 lg:-bottom-4 2xl:bottom-0 left-[50%] -translate-x-[50%] z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
