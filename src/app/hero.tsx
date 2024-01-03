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
import { TypeAnimation } from "react-type-animation";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <div>
      <div className="relative min-h-screen w-full bg-[url('/image/gdscmeeting_low.jpg')] bg-cover bg-no-repeat">
        {/* <div className="relative min-h-screen w-full bg-gradient-to-b from-orange-400 to-blue-400 bg-cover bg-no-repeat"> */}
        {/* create a linear gradient from orange to blue */}
        {/* <div classname="bg-green-400 relative min-h-screen w-full bg-gradient-to-r from-red-300 to-blue-500 bg-cover bg-no-repeat"> */}
        <div className="absolute inset-0 h-full w-full bg-gray-900/40" />
        <div
          className="absolute inset-0 h-full w-full  bg-cover bg-no-repeat"
          style={{ backgroundColor: "rgba(0,14,45,0.8)" }}
        />

        {/* <div className="bg-green-300">
          <img
            src="/image/maildigital-cinema-059web_2.png"
            alt="gdsclogo"
            className="absolute m-auto h-5/6 top-0 left-0 right-0 bottom-0"
          />
        </div> */}
        <img
          src="/image/lecture_no_screen_low_message.png"
          alt="gdsclogo"
          style={{ height: "40%" }}
          className="animate-fade-up animate-duration-[2000ms] animate-delay-500 animate-ease-linear absolute bottom-0 right-10"
        />

        {/* <img
          src="/image/lecture_no_screen_2.png"
          alt="gdsclogo"
          className="w-1/5 absolute bottom-0 left-0"
        /> */}

        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            {/* <img
              src="/image/gdscbanner.png"
              alt="gdsclogo"
              className="w-1/2 rounded-3xl"
            /> */}

            <img
              src="/image/UVA GDSC Logo.png"
              alt="gdsclogo"
              className="mt-24 w-1/3 rounded-3xl"
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
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "The Premiere CS Club at UVA. 🥇",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "We have workshops. ⚒️",
                3000,
                "We have speaker events. 🔊",
                3000,
                "We have competitions. 🏆",
                3000,
                "We have social events. 🎉",
                3000,
                "And we're sponsored by Google!",
                3000,
              ]}
              wrapper="span"
              speed={5}
              style={{
                display: "inline-block",
                fontFamily: "Inter",
                fontSize: "2rem",
                fontWeight: 600,
              }}
              repeat={Infinity}
              className={inter.className + " text-white font-semi mb-12"}
            />
            <p className="text-white">Join the GDSC family of 250+ members</p>
            <div className="flex items-center gap-4 mt-4 mb-36">
              <a href="https://lists.virginia.edu/sympa/subscribe/google_dsc?previous_action=info" target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" color="white">
                  Join Our Mailing List
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
