"use client";

import React from "react";

import FeatureCard from "@/components/feature-card";
import { Typography } from "@material-tailwind/react";

const CORE_TEAM = [
  {
    icon: "/image/headshots/Alexander_Halpern.jpeg",
    title: "Alexander Halpern",
    role: "President, Class of 2026 - \nComputer Science",
  },
  {
    icon: "/image/headshots/Tao_Groves.jpeg",
    title: "Tao Groves",
    role: "Vice President, Class of 2025 - \nComputer Science and Math",
  },
  {
    icon: "/image/headshots/TJ_Oosterhous.jpeg",
    title: "TJ Oosterhous",
    role: "Treasurer, Class of 2026 - \nPre-Commerce",
  },
  {
    icon: "/image/headshots/Oliver_Buckner.jpeg",
    title: "Oliver Buckner",
    role: "Network Outreach, Class of 2026 - \nPre-Batten and Philosophy",
  },
  {
    icon: "/image/headshots/Ryan_LeKuch.jpeg",
    title: "Ryan LeKuch",
    role: "Marketing, Class of 2026 - \nComputer Science and Business",
  },
  {
    icon: "/image/headshots/Michael_Regan.jpeg",
    title: "Michael Regan",
    role: "Event Planning, Class of 2026 - \nComputer Science and Statistics",
  },
  {
    icon: "/image/headshots/Jason_Chin.jpeg",
    title: "Jason Chin",
    role: "Secretary, Class of 2026 - \nComputer Engineering",
  },
  {
    icon: "/image/headshots/Vincent_Song.jpeg",
    title: "Vincent Song",
    role: "Webmaster, Class of 2025 - \nComputer Science",
  },
];

const Executives = () => {
  return (
    <div>
      <div className="container mx-auto mb-8 text-center">
        <Typography variant="h2" color="blue-gray" className="mt-8 mb-4">
          Leadership
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-gray-500 lg:w-5/6"
        >
          Meet the team that runs and organizes the Google Developer Student
          Club at UVA!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {CORE_TEAM.map(({ icon, title, role }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            <strong>{role}</strong>
            <br />
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Executives;
