import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within 30 days of purchase if you're not satisfied with our product.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via email at support@example.com or through our live chat.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees may apply.",
  },
];

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6">
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "var(--colorRedLight)" }}
      >
        {data.title || "Frequently Asked Questions"}
      </h2>
      <div className="space-y-4">
        {data?.content.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full text-left flex justify-between items-center px-4 py-2 text-base font-medium bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              {index + 1}. {faq.question}
              <span
                style={{ color: "var(--colorRedLight)" }}
                className={`transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaAngleDown />
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-base bg-white border-t text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
