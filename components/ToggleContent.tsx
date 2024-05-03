"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function ToggleContent({
  header,
  content,
}: {
  header: string;
  content: JSX.Element;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? (
        <motion.div layout className="text-sm bg-neutral-800 p-4">
          {content}
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default ToggleContent;
