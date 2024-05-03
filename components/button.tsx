"use client";

import { memo, useState } from "react";

import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line react/display-name
const Button = memo<ButtonProps>(({ href, children, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
      className={`${className} border flex flex-col items-center justify-center relative border-neutral-600/20 h-14 overflow-hidden uppercase px-16`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-full w-full bg-white"
        initial={{ height: 0 }}
        animate={{ height: isHovered ? "100%" : 0 }}
      />
      <motion.span
        className="text-neutral-300 font-semibold"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -56 : 0 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="h-14 w-full absolute font-semibold top-0 left-0 flex uppercase text-black items-center justify-center"
        initial={{ y: 56 }}
        animate={{ y: isHovered ? 0 : 56 }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
});

export default Button;
