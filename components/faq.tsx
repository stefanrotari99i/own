"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const faq = [
  {
    id: 1,
    question: "Who are you?",
    answer:
      "0L is a community-driven open source project. There is no corporate sponsor, no venture capital, no foundation. Everyone involved in this project is here because we believe in the power of decentralized architecture and community governance.",
  },
  {
    id: 2,
    question: "How is this project governed?",
    answer:
      "The community will set the path for the project. If you want a voice in the project, all you need to do is participate. If you don’t like what’s happening with 0L, don’t sit on the sidelines. Get involved, use your influence, help us build a better project. ",
  },
  {
    id: 3,
    question: "How did 0L get started?",
    answer:
      "0L is a fork of the open source codeset that was created by the Diem Association for the Diem network (previously known as “Libra.”). Work on the project began in 2019. You can learn more about the technology and how it has been modified for use as a public network by visiting the Technology Overview page.",
  },
  {
    id: 4,
    question: "Why were you working privately for so long?",
    answer:
      "This is not true. We actually worked publicly the whole time since we forked the project. We were never private, just quiet. Some people joined early, and volunteered time, others checked it out and decided not to contribute.",
  },
  {
    id: 5,
    question: "What’s with the emphasis on labor?",
    answer:
      "This project is experimenting with a more labor centric approach to rewards; it might be an utter failure, but it also could work out that the funds distribute more widely then you see in other networks as that labor ramps up. Given that its an experiment, analytics matter a lot. We have a number of people working toward making whole thing more transparent; in practice if we want a community driven project then we need to a) make the state of the system observable and b) make it possible for the community to make changes (by building stuff)",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null as number | null);
  return (
    <div className="my-20 p-4 max-w-screen-2xl mx-auto">
      <h2 className="text-5xl text-neutral-500 mb-10 uppercase font-bold">
        Frequently Asked Questions
      </h2>
      <FaqSection title="General">
        <div className="flex flex-col gap-8 w-full">
          {faq.map((item, index) => (
            <ToggleItem
              key={item.id}
              item={item}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          ))}
        </div>
      </FaqSection>
    </div>
  );
};

const FaqSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full">
      <h3 className="text-4xl text-neutral-400 font-bold uppercase">
        &gt; {title}
      </h3>
      <div className="col-span-3">{children}</div>
    </div>
  );
};

const ToggleItem = ({
  item,
  activeQuestion,
  setActiveQuestion,
}: {
  item: { id: number; question: string; answer: string };
  activeQuestion: number | null;
  setActiveQuestion: (id: number | null) => void;
}) => {
  return (
    <div
      key={item.id}
      className="border-b border-neutral-800/60 pb-2 w-full overflow-hidden"
      aria-expanded={activeQuestion === item.id}
    >
      <motion.button
        initial={{ backgroundColor: "transparent" }}
        animate={{
          backgroundColor: activeQuestion === item.id ? "#fff" : "transparent",
          color: activeQuestion === item.id ? "#000" : "#737373",
        }}
        className="text-2xl px-4 py-3 flex items-center gap-20 justify-between w-full text-neutral-500 text-left mb-2 uppercase font-semibold"
        onClick={() =>
          setActiveQuestion(activeQuestion === item.id ? null : item.id)
        }
      >
        <span className="flex-1">{item.question}</span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{
            rotate: activeQuestion === item.id ? -90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowBack size={18} className={` text-neutral-500 `} />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {activeQuestion === item.id && (
          <motion.p
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="text-neutral-500 font-semibold text-lg  px-4   "
          >
            {item.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
