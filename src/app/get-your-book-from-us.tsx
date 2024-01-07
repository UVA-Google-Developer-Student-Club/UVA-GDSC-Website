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

const PROJECTS_TABS = ["Mission", "Core Team", "Alumni", "Sponsors"];

export function GetYourBookFromUs() {
  const [activeTab, setActiveTab] = React.useState(PROJECTS_TABS[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Mission":
        return (
          <div className="container mx-auto mb-8 text-center max-w-[900px]">
            <Typography variant="h2" color="blue-gray" className=" mb-4">
              Our Mission: Help Students Bridge the Gap between Theory and Practice using Google Tech
            </Typography>
            <Typography variant="lead" className="mx-auto w-full px-4 text-gray-700 lg:w-5/6">
              <p>
                At UVA Google Developer Student Club, we're dedicated to empowering students to make a tangible impact before they graduate. We firmly believe in the transformative potential of Google Developer technologies, enabling aspiring developers to translate their ideas into real-world applications.
              </p> <br></br>
              <p>
                Thus, our mission is clear: we aim to bridge the gap between theoretical knowledge and practical implementation by providing the following:
              </p> <br></br>
              <ol className="pl-6">
                <li>
                  <Typography as="span">
                    1) Free training sessions on Google developer technologies, including Firebase, TensorFlow, Google Cloud Platform, and Flutter, accessible to all our members.
                  </Typography>
                </li> 
                <li> 
                  <Typography as="span">
                    2) Engaging opportunities such as Google's annual Solution Challenge, where you can contribute to projects that benefit our local Charlottesville community or the world beyond.
                  </Typography>
                </li>
              </ol>
            </Typography>
          </div>
        );
      case "Core Team":
        return (
          <Executives />
        );
      case "Alumni":
        return <div>Alumni Tab Content</div>;
      case "Sponsors":
        return <div>Sponsors Tab Content</div>;
      default:
        return null;
    }
  };

  return (
    <section className="mt-8 px-8 max-w-[1200px] mx-auto">
      <div className="mt-8 mb-4 flex items-center justify-center">
        <Tabs value={activeTab} className="w-full lg:w-8/12">
          <TabsHeader className="h-12" indicatorProps={{ className: "!bg-gray-400 rounded-lg" }}>
            {PROJECTS_TABS.map((book) => (
              <Tab
                key={book}
                value={book}
                className={`!font-medium capitalize transition-all duration-300
                  ${activeTab === book ? "text-gray-100" : "text-gray-500 capitalize"}
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
