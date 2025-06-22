"use client";
import { Select } from "antd";
import React from "react";

const SelectCom = () => {
  return (
    <div>
      <Select
        showSearch
        style={{ width: "250px" }}
        placeholder="Select your location"
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "New York City, NY" },
          { value: "2", label: "Los Angeles, CA" },
          { value: "3", label: "Chicago, IL" },
          { value: "4", label: "Houston, TX" },
          { value: "5", label: "Phoenix, AZ" },
          { value: "6", label: "Philadelphia, PA" },
          { value: "7", label: "San Antonio, TX" },
          { value: "8", label: "San Diego, CA" },
          { value: "9", label: "Dallas, TX" },
          { value: "10", label: "San Jose, CA" },
          { value: "11", label: "Austin, TX" },
          { value: "12", label: "Jacksonville, FL" },
          { value: "13", label: "Fort Worth, TX" },
          { value: "14", label: "Columbus, OH" },
          { value: "15", label: "Charlotte, NC" },
          { value: "16", label: "San Francisco, CA" },
          { value: "17", label: "Indianapolis, IN" },
          { value: "18", label: "Seattle, WA" },
          { value: "19", label: "Denver, CO" },
          { value: "20", label: "Washington, D.C." },
          { value: "21", label: "Boston, MA" },
          { value: "22", label: "El Paso, TX" },
          { value: "23", label: "Nashville, TN" },
          { value: "24", label: "Detroit, MI" },
          { value: "25", label: "Oklahoma City, OK" },
          { value: "26", label: "Portland, OR" },
          { value: "27", label: "Las Vegas, NV" },
          { value: "28", label: "Memphis, TN" },
          { value: "29", label: "Louisville, KY" },
          { value: "30", label: "Baltimore, MD" },
          { value: "31", label: "Milwaukee, WI" },
          { value: "32", label: "Albuquerque, NM" },
          { value: "33", label: "Tucson, AZ" },
          { value: "34", label: "Fresno, CA" },
          { value: "35", label: "Sacramento, CA" },
          { value: "36", label: "Kansas City, MO" },
          { value: "37", label: "Atlanta, GA" },
          { value: "38", label: "Miami, FL" },
          { value: "39", label: "Raleigh, NC" },
          { value: "40", label: "Omaha, NE" },
        ]}
      />
    </div>
  );
};

export default SelectCom;
