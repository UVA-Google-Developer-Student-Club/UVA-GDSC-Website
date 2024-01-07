"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  TruckIcon,
  BanknotesIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: "/image/headshots/Alexander_Halpern.jpeg",
    title: "Alexander Halpern",
    role: "President, Class of 2026 - \nComputer Science",
    description:
      "Explore our educator resources, bulk ordering options, and special teacher discounts.",
  },
  {
    icon: "/image/headshots/Tao_Groves.jpeg",
    title: "Tao Groves",
    role: "Vice President, Class of 2025 - \nComputer Science and Math",
    description:
      "Our dedicated customer support team is available to assist you 24 hours a day, 7 days a week.",
  },
  {
    icon: "/image/headshots/TJ_Oosterhous.jpeg",
    title: "TJ Oosterhous",
    role: "Treasurer, Class of 2026 - \nPre-Commerce",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
  {
    icon: "/image/headshots/Jason_Chin.jpeg",
    title: "Jason Chin",
    role: "Secretary, Class of 2026 - \nComputer Engineering",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
  {
    icon: "/image/headshots/Michael_Regan.jpeg",
    title: "Michael Regan",
    role: "Event Planning, Class of 2026 - \nComputer Science and Statistics",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
  {
    icon: "/image/headshots/Ryan_LeKuch.jpeg",
    title: "Ryan LeKuch",
    role: "Marketing, Class of 2026 - \nComputer Science and Business",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
  {
    icon: "/image/headshots/Oliver_Buckner.jpeg",
    title: "Oliver Buckner",
    role: "Network Outreach, Class of 2026 - \nPre-Batten and Philosophy",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
  {
    icon: "/image/headshots/Vincent_Song.jpeg",
    title: "Vincent Song",
    role: "Webmaster, Class of 2025 - \nComputer Science",
    description:
      "We offer fast and reliable shipping, so you can focus on what matters most - your education",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="mt-8 px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Leadership
        </Typography>

        <Typography className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12">
          Meet the team that runs and organizes the Google Developer Student
          Club at UVA!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, role, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            <strong>{role}</strong>
            <br></br>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
