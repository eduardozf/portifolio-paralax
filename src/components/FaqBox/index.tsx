"use client";
import Image from "next/image";
import { useState } from "react";
import ArrowSVG from "../../../public/assets/arrow.svg";

type QuestionType = {
  question: string;
  response: JSX.Element;
};

type FaqQuestionType = QuestionType & {
  id: number;
  expand: (id: number) => void;
  expanded: boolean;
};

export default function FaqSection() {
  const [expanded, setExpanded] = useState(0);

  const questions: QuestionType[] = [
    {
      question: "Lorem ipsum dolor sit amet",
      response: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          orci sodales nunc pretium, ut pulvinar ex maximus. Nulla facilisi.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi non viverra risus. Praesent condimentum
          finibus magna, cursus viverra dolor dapibus a. Vivamus dui risus,
          feugiat sit amet nisi sed, imperdiet aliquet elit.
        </>
      ),
    },
    {
      question: "Lorem ipsum dolor sit amet",
      response: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          orci sodales nunc pretium, ut pulvinar ex maximus. Nulla facilisi.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi non viverra risus. Praesent condimentum
          finibus magna, cursus viverra dolor dapibus a. Vivamus dui risus,
          feugiat sit amet nisi sed, imperdiet aliquet elit.
        </>
      ),
    },
    {
      question: "Lorem ipsum dolor sit amet",
      response: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          orci sodales nunc pretium, ut pulvinar ex maximus. Nulla facilisi.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi non viverra risus. Praesent condimentum
          finibus magna, cursus viverra dolor dapibus a. Vivamus dui risus,
          feugiat sit amet nisi sed, imperdiet aliquet elit.
        </>
      ),
    },
    {
      question: "Lorem ipsum dolor sit amet",
      response: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          orci sodales nunc pretium, ut pulvinar ex maximus. Nulla facilisi.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi non viverra risus. Praesent condimentum
          finibus magna, cursus viverra dolor dapibus a. Vivamus dui risus,
          feugiat sit amet nisi sed, imperdiet aliquet elit.
        </>
      ),
    },
    {
      question: "Lorem ipsum dolor sit amet",
      response: (
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
          orci sodales nunc pretium, ut pulvinar ex maximus. Nulla facilisi.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Morbi non viverra risus. Praesent condimentum
          finibus magna, cursus viverra dolor dapibus a. Vivamus dui risus,
          feugiat sit amet nisi sed, imperdiet aliquet elit.
        </>
      ),
    },
  ];

  return (
    <main className="pl-[115px] w-[670px] pb-[75px]">
      {questions?.map((it, index) => (
        <FaqQuestion
          question={it.question}
          response={it.response}
          id={index}
          expanded={index === expanded}
          expand={(myself) => setExpanded(myself)}
          key={index}
        />
      ))}
    </main>
  );
}

const FaqQuestion = ({
  id,
  expanded,
  expand,
  question,
  response,
}: FaqQuestionType) => {
  return (
    <button
      onClick={() => expand(expanded ? 9999 : id)}
      className=" bg-white border-b-[1px] border-gray-400 w-full p-2 flex flex-col flex-1 gap-2"
    >
      <div
        className={`flex w-full justify-between ${
          expanded ? "text-green" : "text-gray-600 "
        }`}
      >
        <h1 className={`${expanded ? "text-lg font-bold" : "text-md"}`}>
          {question}
        </h1>

        <Image
          src={ArrowSVG}
          alt="Arrow"
          width={14}
          height={14}
          className={`transition-all duration-150 ${
            expanded ? "fill-green -rotate-90" : "fill-gray-600"
          }`}
        />
      </div>
      <span
        className={`text-justify text-sm font-light transition-transform ease-in-out duration-1000 ${
          expanded ? "block" : "hidden"
        }`}
      >
        {response}
      </span>
    </button>
  );
};
