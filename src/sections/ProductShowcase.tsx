"use client"
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={productRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" draggable={false} quality={100} className="mt-10" priority />
          <motion.img src={pyramidImage.src} alt="Pyramid Image" height={262} width={262} draggable={false} className="hidden md:block absolute -right-36 -top-32" style={{ translateY: translateY }} />
          <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={248} draggable={false} className="absolute bottom-24 -left-36" style={{ translateY: translateY }} />
        </div>
      </div>
    </section>
  );
};
