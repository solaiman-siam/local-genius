"use client";

import { Collapse, CollapseProps } from "antd";
import { ChevronDown } from "lucide-react";

function Accordion() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items1: CollapseProps["items"] = [
    {
      key: "1",
      label: "Top-rated, Handpicked Small Businesses",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Farmers Markets",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Outdoor Experiences",
      children: <p>{text}</p>,
    },
  ];
  const items2: CollapseProps["items"] = [
    {
      key: "1",
      label: "Curated, Verified, Local Only",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Privacy Focused",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Instant Access by Text or Chat",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className={` grid max-w-[1300px] mx-auto grid-cols-2 py-10 gap-6`}>
      <Collapse
        className=""
        style={{ backgroundColor: "white" }}
        bordered={false}
        expandIcon={({ isActive }) => (
          <div>
            {isActive ? (
              <ChevronDown className="rotate-180 transition-transform duration-400" />
            ) : (
              <ChevronDown className="rotate-0 transition-transform duration-400" />
            )}
          </div>
        )}
        accordion
        expandIconPosition="end"
        items={items1}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
      <Collapse
        className=""
        style={{ backgroundColor: "white" }}
        bordered={false}
        expandIcon={({ isActive }) => (
          <div>
            {isActive ? (
              <ChevronDown className="rotate-180 transition-transform duration-400" />
            ) : (
              <ChevronDown className="rotate-0 transition-transform duration-400" />
            )}
          </div>
        )}
        accordion
        expandIconPosition="end"
        items={items2}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
}

export default Accordion;
