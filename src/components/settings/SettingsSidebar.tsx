"use client";
import Link from "next/link";
import { useState } from "react";

type TLink = {
  id: number;
  link: string;
  name: string;
};

const SettingsSidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const settingsLink = [
    { id: 1, link: "/settings/profile", name: "profile" },
    { id: 2, link: "/settings/account", name: "account" },
    { id: 3, link: "/settings/subscription", name: "subscription" },
    { id: 4, link: "/settings/billing", name: "billing" },
    { id: 5, link: "/settings/business", name: "suggest business" },
    { id: 6, link: "/settings/privacy", name: "privacy" },
  ];

  return (
    <div>
      <h3 className="text-3xl font-medium pb-8">Settings</h3>
      <div className="flex text-black/90 flex-col gap-1">
        {settingsLink.map((link: TLink, index: number) => (
          <Link href={link.link} key={link.id}>
            <h4
              onClick={() => setActiveTab(index)}
              className={`capitalize px-4 font-medium py-2 rounded-md ${
                activeTab === index ? "bg-primaryBg/10" : ""
              }`}
            >
              {link.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsSidebar;
