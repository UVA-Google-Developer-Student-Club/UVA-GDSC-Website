"use client";
import React from "react";

import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const FAQS = [
  {
    title: "When and where do club meetings occur?",
    desc: "As of now, club meetings occur every other Wednesday at 7 p.m. in Clark 107. Please join the mailing list using the button in the footer for more up-to-date information.",
  },
  {
    title: "What kinds of events activities do GDSC members participate in?",
    desc: "As a member of the GDSC at UVA, will have the opportunity to participate in a variety of different events, primarily: technical workshops, speaker events, competitions, and social events",
  },
  {
    title: "What kind of workshops will you host?",
    desc: "We make an effort to host workshops that are relevant to emerging technologies that will be beneficial for club members to learn about. This year, our workshops will be focused on working with topics such as Artificial Intelligence, Web Development, Augmented Reality and Web 3.0. Check out the Projects tab above to see what we have done in past workshops.",
  },
  {
    title: "What of kind of speaker events will you host?",
    desc: "We plan on bringing speakers to UVA who can provide members with insight into technology in relation to industry and innovation. Members will hear varying perspectives, from technology executives at large companies, to local UVA alums who have started startups.",
  },
  {
    title: "What kind of competitions will you host?",
    desc: "The biggest competition that GDSC will be participating in is Google's National Solution Challenge competition. More info here: https://developers.google.com/community/gdsc-solution-challenge. We are also planning to host small competitions regularly in order to allow members to compete and win prizes. We also hope to host a 24 hour hackathon this semester, and we are excited to see what technological innovations members come up with!",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-8 mt-8">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
