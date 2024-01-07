"use client";

import React from 'react'
import { Typography } from "@material-tailwind/react";

const Mission = () => {
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
  )
}

export default Mission