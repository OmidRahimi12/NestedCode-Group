import { useState } from "react";

const questions = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
  },

  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`mb-2 overflow-hidden rounded border ${
              open === index
                ? "border-[#00a19e] bg-[#e8f5f5]"
                : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between px-4 py-4 text-left"
            >
              <span
                className={`text-xl font-semibold  ${open === index ? "text-[#00a19e]" : "text-black"}`}
              >
                {item.question}
              </span>

              <span className="text-gray-500">
                {open === index ? "⌄" : ">"}
              </span>
            </button>

            {open === index && (
              <p className="px-4 pb-4 text-sm leading-6 text-gray-600">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
