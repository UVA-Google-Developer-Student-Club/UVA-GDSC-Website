"use client";

import React from "react";

import FeatureCard from "@/components/feature-card";
import { Typography } from "@material-tailwind/react";

const ALUMNI = [
  {
    icon: "/image/alumni/Eric_Stein.jpeg",
    title: "Eric Stein",
    role: "Lead, Class of 2022",
    major: "Computer Science",
    description: "Software Engineer at Google",
  },
  {
    icon: "/image/alumni/David_Xue.jpeg",
    title: "David Xue",
    role: "Vice Lead, Class of 2022",
    major: "Computer Science and Economics",
    description: "Ex Facebook & Amazon",
  },
  {
    icon: "/image/alumni/Qasim_Ali.jpeg",
    title: "Qasim Ali",
    role: "Treasurer, Class of 2022",
    major: "Computer Science",
    description: "Software Engineer at Meta",
  },
  {
    icon: "/image/alumni/Eli_Kin.jpeg",
    title: "Elijah Kin",
    role: "Secretary, Class of 2024",
    major: "Computer Science and Mathematics",
    description: "Software Engineer at Google",
  },
  {
    icon: "/image/alumni/Spencer_Hernandez.jpeg",
    title: "Spencer Hernandez",
    role: "Event Planning Assistant, Class of 2024",
    major: "Computer Engineering",
    description: "Pursuing Masters in CS at UVA",
  },
  {
    icon: "/image/alumni/Connie_Zhang.jpeg",
    title: "Connie Zhang",
    role: "Marketer, Class of 2023",
    major: "Computer Science",
    description: "Cyber Security Associate at Capital One",
  },
  {
    icon: "/image/alumni/Diana_Damenova.jpeg",
    title: "Diana Damenova",
    role: "Marketer, Class of 2023",
    major: "Computer Science",
    description: "Security Researcher at Microsoft",
  },
  {
    icon: "/image/alumni/Abhir_Karande.jpeg",
    title: "Abhir Karande",
    role: "Computer Science Consultant, Class of 2023",
    major: "Computer Science",
    description: "Pursuing Bachelors in CS at UVA",
  },
  {
    icon: "/image/alumni/Zachery_Boner.jpeg",
    title: "Zachery Boner",
    role: "Computer Science Consultant, Class of 2023",
    major: "Computer Science and Mathematics",
    description: "Pursuing PhD in CS at Duke",
  },
];

const Alumni = () => {
  return (
    <div>
      <div className="container mx-auto mb-8 text-center">
        <Typography variant="h2" color="blue-gray" className="mt-8 mb-4">
          Alumni
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-gray-500 lg:w-5/6"
        >
          Our past GDSC executive team that have graduated from the University
          of Virginia!
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {ALUMNI.map(({ icon, title, role, major, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            <strong>{role}</strong>
            <br />
            <p className="w-full overflow-nowrap">{description}</p>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
