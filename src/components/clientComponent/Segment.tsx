"use client";

import { Segmented } from "antd";
import { useState } from "react";

const Segment = ({centered} : {centered: boolean}) => {
  const options: string[] = ["Pay Monthly", "Pay Anually"];
  const [value, setValue] = useState('Pay Monthly')

  return (
    <div className={` w-fit  ${centered ? 'pt-4' : 'pt-8'}`}>
      <Segmented
        shape="round"
        size="large"
        className="rounded-full bg-white  p-4"
        options={options}
        onChange={(value) => setValue(value)}
      />
      <h2 className={`text-5xl font-semibold  pb-8 ${centered ? 'flex justify-center pt-4' : 'pt-8'}  `}>${value === 'Pay Monthly' ? '99.0' : '120.0'}</h2>
    </div>
  );
};

export default Segment;
