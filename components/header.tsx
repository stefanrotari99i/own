"use client";

import { motion, useScroll } from "framer-motion";

import Button from "@/components/button";
import Link from "next/link";
import { PiGithubLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";

const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header className="w-full p-4 flex items-center fixed top-0 left-0">
      <div className="flex-1 border flex items-center bg-white/5 backdrop-blur-xl relative border-neutral-600/20 h-14">
        <Link
          className="uppercase ml-4 text-neutral-300 font-black text-sm"
          href="/"
        >
          currenlty available for hire
        </Link>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 90,
          }}
          className="absolute origin-left bottom-0 left-0 h-full w-full bg-white/5"
        />
      </div>
      <Button className="w-[40%] backdrop-blur-xl" href="/">
        Home
      </Button>
      <Button className=" backdrop-blur-xl" href="/about">
        <PiGithubLogoBold size={24} />
      </Button>
      <Button className=" backdrop-blur-xl" href="/faq">
        <TfiLinkedin size={22} />
      </Button>
    </header>
  );
};

export default Header;
