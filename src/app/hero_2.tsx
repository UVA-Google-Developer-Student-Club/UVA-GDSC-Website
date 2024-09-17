"use client";

import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  IconButton,
} from "@material-tailwind/react";

function Hero() {
  return (
    <div>
      {/* <div className="relative min-h-screen w-full bg-[url('/image/back.png')] bg-cover bg-no-repeat"> */}
      <div className="relative min-h-screen w-full bg-gradient-to-b from-orange-400 to-blue-400 bg-cover bg-no-repeat">
        {/* create a linear gradient from orange to blue */}
        {/* <div classname="bg-green-400 relative min-h-screen w-full bg-gradient-to-r from-red-300 to-blue-500 bg-cover bg-no-repeat"> */}
        <div className="absolute inset-0 h-full w-full bg-gray-900/0" />
        <div className="bg-green-300">
          <img
            src="/image/maildigital-cinema-059web_2.png"
            alt="gdglogo"
            className="absolute m-auto h-5/6 top-0 left-0 right-0 bottom-0"
          />
        </div>
        <img
          src="/image/lecture_no_screen.png"
          alt="gdglogo"
          className="w-1/3 absolute bottom-0 right-10"
        />

        <img
          src="/image/lecture_no_screen_2.png"
          alt="gdglogo"
          className="w-1/5 absolute bottom-0 left-0"
        />

        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            {/* <img
              src="/image/gdscbanner.png"
              alt="gdglogo"
              className="w-1/2 rounded-3xl"
            /> */}

            <img
              src="/image/UVA GDSC Logo.svg"
              alt="gdglogo"
              className="mt-24 w-1/2 rounded-3xl"
            />

            {/* <Typography variant="h3" color="white" className="mb-2">
              29-31 August @ New York
            </Typography>
            <Typography variant="h1" color="white" className="lg:max-w-3xl">
              AI Conference 2023: Unlocking the Future
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
            >
              Join us for the most anticipated event of the year - the AI
              Conference 2023!
            </Typography> */}
            <div className="flex items-center gap-4">
              <Button variant="gradient" color="white">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
