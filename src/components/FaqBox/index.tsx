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
      question: "What is the Amazon Rainforest and why is it important?",
      response: (
        <>
          The Amazon Rainforest is the largest tropical rainforest in the world,
          covering over 5.5 million square kilometers. It is crucial for
          regulating the Earth&apos;s climate, producing oxygen, and hosting a
          vast biodiversity, including many species that are not found anywhere
          else in the world. It also plays a vital role in the culture and
          livelihoods of indigenous peoples.
        </>
      ),
    },
    {
      question: "What are some unique animals found in Brazil?",
      response: (
        <>
          Brazil is home to a diverse range of unique animals, including the
          jaguar, capybara, sloth, giant anteater, and the pink river dolphin.
          The Amazon Rainforest, Pantanal, and Atlantic Forest are just a few of
          the regions where these animals can be found.
        </>
      ),
    },
    {
      question: "What are some traditional Brazilian foods?",
      response: (
        <>
          Brazilian cuisine is diverse and flavorful. Some traditional dishes
          include feijoada (a black bean stew with pork), pão de queijo (cheese
          bread), acarajé (deep-fried balls of black-eyed pea dough filled with
          shrimp), and brigadeiro (a type of chocolate truffle). Each region in
          Brazil has its own culinary specialties that reflect its cultural
          heritage.
        </>
      ),
    },
    {
      question: "What is Brazil known for internationally?",
      response: (
        <>
          Brazil is renowned for its vibrant culture, diverse ecosystems, and
          significant contributions to music and sports. Internationally, it is
          famous for the Amazon Rainforest, the annual Carnival festival, its
          rich musical heritage including samba and bossa nova, and its success
          in soccer, being home to legendary players like Pelé and Neymar.
        </>
      ),
    },
    {
      question: "What is Carnival in Brazil and when is it celebrated?",
      response: (
        <>
          Carnival is a major festival in Brazil known for its vibrant parades,
          music, dance, and elaborate costumes. It typically takes place in
          February or March, starting on the Friday before Ash Wednesday and
          ending on Ash Wednesday itself. The most famous Carnival celebrations
          occur in Rio de Janeiro, São Paulo, and Salvador.
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
        <h1 className={`${expanded ? "text-[1.3rem] font-bold" : "text-md"}`}>
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
        className={`text-black text-justify text-sm font-light transition-transform ease-in-out duration-1000 ${
          expanded ? "block" : "hidden"
        }`}
      >
        {response}
      </span>
    </button>
  );
};
