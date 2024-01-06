"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/project-card";
import { Footer } from "@/components";

const PROJECTS = [
  {
    img: `/image/projects/Nov15.png`,
    category: "Technical Workshop",
    title:
      "Training an Image Classification Model to Classify Fashion Items using TensorFlow",
    desc: "Workshop on November 15, 2023 teaching members about how to create image classification models. Lecture covered the process of Preprocessing images and passing these images to train convolutional networks.",
    date: "November 15, 2023",
    link: "https://github.com/UVA-Google-Developer-Student-Club/Nov15ImageClassification",
  },
  {
    img: `/image/projects/Oct15.png`,
    category: "Info Session + Technical Workshop",
    title:
      "Utilizing HuggingFace Inference APIs to Conduct Sentiment Analysis on Sentences",
    desc: "A funny and relatable novel about the challenges of navigating middle school.",
    date: "October 15, 2023",
    link: "https://github.com/UVA-Google-Developer-Student-Club/Wed15IntroToML_MNIST",
  },
];

const PROJECTS_TABS = ["Fall 2023"];

export function ProjectSection() {
  const [activeTab, setActiveTab] = React.useState(PROJECTS_TABS[0]);

  return (
    <section className="px-8 pt-12 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Projects
        </Typography>
        <Typography
          variant="p"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          At the GDSC at UVA, we are committed to providing our members with
          opportunities to learn and grow. We offer a variety of projects
          throughout the semester, ranging from technical workshops to
          hackathons.
        </Typography>
        <div className="mt-12 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {PROJECTS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      {/* <div className="grid place-items-center">
        <Button className="mt-32" variant="outlined">
          Show more
        </Button>
      </div> */}
      <Footer />
    </section>
  );
}

export default ProjectSection;
