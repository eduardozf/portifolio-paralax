"use client";
import { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";

const FallingLeafs = () => {
  const container = useRef<HTMLDivElement>(null);
  const numLeaves = 20;
  const durationRange = [15, 20];
  const scaleRange = [0.6, 1.3];
  const blurRange = [2, 5];

  const animateLeaf = (leaf: HTMLDivElement, index: number) => {
    gsap.to(leaf, {
      duration: gsap.utils.random(durationRange[0], durationRange[1]),
      y: `100vh`,
      rotation: gsap.utils.random(-20, 20),
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(leaf, { y: "-210vh" });
        animateLeaf(leaf, index);
      },
    });
  };

  const createLeaf = () => {
    const leaf = document.createElement("div");
    const scale = gsap.utils.random(scaleRange[0], scaleRange[1]);
    const blur = gsap.utils.random(blurRange[0], blurRange[1]);

    leaf.innerHTML = `<img
      src="/assets/single_leaf.webp"
      alt="Leaf"
      height="${88 * scale}"
      width="${88 * scale}"
      style="filter: blur(${blur}px);"
    />`;

    gsap.set(leaf, {
      x: gsap.utils.random(0, 100) + "vw",
      y: "-210vh",
      rotation: gsap.utils.random(-40, 40),
      scale: scale,
    });

    return leaf;
  };

  useEffect(() => {
    for (let i = 0; i < numLeaves; i++) {
      const leaf = createLeaf();
      container.current?.appendChild(leaf);
      animateLeaf(leaf, i);
    }
  }, []);

  return (
    <div
      ref={container}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
    ></div>
  );
};

export default FallingLeafs;
