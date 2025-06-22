"use client";

import { Collapse, CollapseProps } from "antd";
import { ChevronDown } from "lucide-react";

function FaqAccordion() {
  const text = `
  Local Genius is your human-first, AI Powered local assistant. We help you instantly discover top-rated small businesses and outdoor experiences anywhere in the U.S. by text or chat. No apps, no scroll, no stress.
`;

  const items1: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is Local Genius?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "2",
      label: "How does It work?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "3",
      label: "How are recommendations chosen?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "4",
      label: "Is my information safe?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "5",
      label: "Who is Local Genius for?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "6",
      label: "Do I need to download an app?",
      children: <p className="text-description text-base">{text}</p>,
    },
    {
      key: "7",
      label: "How much does It cost?",
      children: <p className="text-description text-base">{text}</p>,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className={` grid max-w-[1300px] mx-auto  py-10 gap-6`}>
      <Collapse
        className=""
        style={{ backgroundColor: "white" }}
        bordered={false}
        expandIcon={({ isActive }) => (
          <div>
            <ChevronDown
              className={`!transition-transform !duration-300 ${
                isActive ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        )}
        accordion
        expandIconPosition="end"
        items={items1}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
}

export default FaqAccordion;
