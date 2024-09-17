"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const Mission = () => {
  return (
    <div className="container flex flex-col items-start mx-auto mb-12 text-left max-w-[900px] px-6">
      <Typography variant="h2" className="w-full text-center mt-8">
        Our Mission
      </Typography>
      <Typography variant="h3" className="mt-8 px-4 mb-4 text-xl">
        Help Students Bridge the Gap between Theory and Practice using Google
        Technology
      </Typography>
      <div className="text-left px-4 text-gray-700">
        <p>
          At UVA Google Developer Group, we&apos;re dedicated to empowering
          students to make a tangible impact before they graduate. We firmly
          believe in the transformative potential of Google Developer
          technologies, enabling aspiring developers to translate their ideas
          into real-world applications.
        </p>
        <br />
        <p>
          Thus, our mission is clear: we aim to bridge the gap between
          theoretical knowledge and practical implementation by providing the
          following:
        </p>
        <br />
        <ol className="list-decimal pl-4" type="1">
          <li>
            {/* <Typography> */}
            Free training sessions on Google developer technologies, including
            Firebase, TensorFlow, Google Cloud Platform, and Flutter, accessible
            to all our members.
            {/* </Typography> */}
          </li>
          <li>
            {/* <Typography> */}
            Engaging opportunities such as Google&apos;s annual Solution
            Challenge, where you can contribute to projects that benefit our
            local Charlottesville community or the world beyond.
            {/* </Typography> */}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Mission;
