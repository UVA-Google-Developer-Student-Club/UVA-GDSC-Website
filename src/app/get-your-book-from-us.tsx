"use client";

import React from "react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import Executives from "@/components/executives";
import Mission from "@/components/mission";
import Alumni from "@/components/alumni";

const PROJECTS_TABS = ["Leadership", "Alumni"];

export function GetYourBookFromUs() {
  const [activeTab, setActiveTab] = React.useState(PROJECTS_TABS[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      // case "Mission":
      //   return <Mission />;
      case "Leadership":
        return <Executives />;
      case "Alumni":
        return <Alumni />;
      // case "Sponsors":
      //   return (
      //     <div className="flex w-full items-center justify-center mt-12">
      //       Coming Soon!
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <section className="mt-8 px-8 max-w-[1200px] mx-auto">
      <div className="mt-8 mb-4 flex items-center justify-center">
        <Tabs value={activeTab} className="w-full lg:w-8/12">
          <TabsHeader
            className="h-12"
            indicatorProps={{ className: "!bg-gray-400 rounded-lg" }}
          >
            {PROJECTS_TABS.map((book) => (
              <Tab
                key={book}
                value={book}
                className={`!font-medium capitalize transition-all duration-300
                  ${
                    activeTab === book
                      ? "text-gray-100"
                      : "text-gray-500 capitalize"
                  }
                `}
                onClick={() => setActiveTab(book)}
              >
                {book}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      {renderTabContent()}
    </section>
  );
}

export default GetYourBookFromUs;
