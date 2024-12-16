"use client";

import { useRef, useState } from "react";

// <FAQ> component is a list of <Item> components
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What do I get exactly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You’ll receive curated social media content, streamlined online intake
        forms, CRM integration, automated marketing tools, and Google review
        request automation.
      </div>
    ),
  },
  {
    question: "How does the online intake work?",
    answer: (
      <p>
        Our online forms capture customer inquiries directly from your website
        or social media. The data is automatically sent to your CRM and turned
        into actionable tasks.
      </p>
    ),
  },
  {
    question: "Can I customize the social media content?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! While we provide ready-to-post content, you can edit it to align
        with your brand’s voice and style.
      </div>
    ),
  },
  {
    question: "How does the automated review system work?",
    answer: (
      <p>
        The system sends requests to your satisfied customers, encouraging them
        to leave positive reviews on Google. It’s fully automated, saving you
        time and boosting your reputation.
      </p>
    ),
  },
  {
    question: "What if I have other questions?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        No problem! Feel free to contact us at support@automatexyz.app, and
        we’ll be happy to assist you.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 text-primary"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 ${
            isOpen ? "text-primary font-bold" : "text-primary"
          }`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
