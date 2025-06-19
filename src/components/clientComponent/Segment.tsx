"use client";

import { Segmented } from "antd";
import { useState } from "react";

const Segment = () => {
  const options: string[] = ["Pay Monthly", "Pay Anually"];
  const [value, setValue] = useState('Pay Monthly')

  return (
    <div className=" w-fit  pt-8">
      <Segmented
        shape="round"
        size="large"
        className="rounded-full bg-white  p-4"
        options={options}
        onChange={(value) => setValue(value)}
      />
      <h2 className="text-5xl font-semibold pt-8 pb-8">${value === 'Pay Monthly' ? '99.0' : '120.0'}</h2>
    </div>
  );
};

export default Segment;
