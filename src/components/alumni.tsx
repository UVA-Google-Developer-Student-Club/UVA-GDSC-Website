"use client";

import React from 'react'

import FeatureCard from "@/components/feature-card";
import { Typography } from "@material-tailwind/react";

const ALUMNI = [
    {
        icon: "/image/alumni/Eric_Stein.jpeg",
        title: "Eric Stein",
        role: "Lead, Class of 2022 - Computer Science",
    },
    {
        icon: "/image/alumni/David_Xue.jpeg",
        title: "David Xue",
        role: "Vice Lead, Class of 2022 - Computer Science and Economics",  
    },
    {
        icon: "/image/alumni/Qasim_Ali.jpeg",
        title: "Qasim Ali",
        role: "Treasurer, Class of 2022 - Computer Science",
    },
    {
        icon: "/image/alumni/Eli_Kin.jpeg",
        title: "Elijah Kin",
        role: "Secretary, Class of 2024 - Computer Science and Mathematics",
    },
    {
        icon: "/image/alumni/Spencer_Hernandez.jpeg",
        title: "Spencer Hernandez",
        role: "Event Planning Assistant, Class of 2024 - Computer Engineering",
    },
    {
        icon: "/image/alumni/Connie_Zhang.jpeg",
        title: "Connie Zhang",
        role: "Marketer, Class of 2023 - Computer Science",
    },
    {
        icon: "/image/alumni/Diana_Damenova.jpeg",
        title: "Diana Damenova",
        role: "Marketer, Class of 2023 - Computer Science",
    },
    {
        icon: "/image/alumni/Abhir_Karande.jpeg",
        title: "Abhir Karande",
        role: "Computer Science Consultant, Class of 2023 - Computer Science",
    },
    {
        icon: "/image/alumni/Zachery_Boner.jpeg",
        title: "Zachery Boner",
        role: "Computer Science Consultant, Class of 2023 - Computer Science and Mathematics",
    },
];

const Alumni = () => {
  return (
    <div>
        <div className="container mx-auto mb-8 text-center">
            <Typography variant="h2" color="blue-gray" className="mb-4">
            Alumni
            </Typography>
            <Typography
            variant="lead"
            className="mx-auto w-full px-4 text-gray-500 lg:w-5/6"
            >
            Our past GDSC executive team that have graduated from the University of Virginia!
            </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {ALUMNI.map(({ icon, title, role, description }) => (
            <FeatureCard key={title} icon={icon} title={title}>
            <strong>{role}</strong>
            <br />
            {description}
            </FeatureCard>
        ))}
        </div>
    </div>
  )
}

export default Alumni