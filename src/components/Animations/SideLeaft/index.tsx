"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const SideLeaf = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    const element = imageRef.current;

    timeline
      .to(element, { rotate: "+=5", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: "-=5", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: "+=6", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: "-=5", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: "+=4", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: "-=6", duration: 2, ease: "power1.inOut" })
      .to(element, { rotate: 0, duration: 2, ease: "power1.inOut" });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Image
        ref={imageRef}
        src="/assets/side_leafs.webp"
        alt="Side Leaves"
        height={253}
        width={194}
        quality={100}
        className="absolute -right-32 -bottom-24 w-auto h-[400px] origin-[70%_100%]"
      />
    </div>
  );
};
export default SideLeaf;
