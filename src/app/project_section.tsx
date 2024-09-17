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
// https://uvagdsc.devpost.com/

const EVENTS = [
  {
    img: `/image/events/Sept092024.png`,
    category: "Interest Meeting",
    title: "Interest Meeting 2024",

    desc: "Join us for an Interest Meeting where we will explain what the GDSC (Google Developer Student Club) does and how you can get involved. Learn more about our upcoming events and how you can contribute to impactful projects.",
    date: "February 12, 2024",
    link: "https://gdg.community.dev/gdg-on-campus-university-of-virginia-charlottesville-united-states/",
  },
  {
    img: `/image/events/SolutionChallenge2024.png`,
    category: "Hackathon",
    title: "Solution Challenge Hackathon",

    desc: "This is the GDSC at UVA's version of Google's National Solution Challenge competition. Students will work in teams to solve critical problems in the Charlottesville area, focusing on the 17 United Nations Sustainable Development Goals.",
    date: "February 12, 2024",
    link: "https://uvagdsc.devpost.com/",
  },
  {
    img: `/image/events/Mar112024.jpg`,
    category: "Speaker Event",
    title: "Speaker Event with Eric Stein and Mario Cortes",

    desc: "Speaker session with Eric Stein and Mario Cortes, both Software Engineers at Google and UVA alumni. They will be discussing their experiences working at Google and how they got to where they are today. The event is in partnership with the GDSC at NYU.",
    date: "Februrary 12, 2024",
    link: "https://www.youtube.com/watch?v=9ONodI3HdQgm",
  },
  {
    img: `/image/events/Feb12.png`,
    category: "Info Session",
    title: "UVA Solution Challenge Introductory Meeting",
    desc: "Kickstarting the UVA Solution Challenge where students will be working in teams to try and solve a critical problem that exists in the local Charlottesville area that relates to the 17 United Nations Sustainable Development Goals.",
    date: "Februrary 12, 2024",
    link: "https://uvagdsc.devpost.com/",
  },
  {
    img: `/image/events/Nov15.png`,
    category: "Technical Workshop",
    title:
      "Training an Image Classification Model to Classify Fashion Items using TensorFlow",
    desc: "Workshop on November 15, 2023 teaching members about how to create image classification models. Lecture covered the process of Preprocessing images and passing these images to train convolutional networks.",
    date: "November 15, 2023",
    link: "https://github.com/UVA-Google-Developer-Student-Club/Nov15ImageClassification",
  },
  {
    img: `/image/events/Oct252023.jpg`,
    category: "Technical Workshop",
    title: "Technical Interview Workshop with Google Engineers",
    desc: "Google Engineers came to UVA to teach GDSC members about how to prepare for the technical interview process and to provide insight into the interview process at Google.",
    date: "October 25, 2023",
    link: "https://github.com/UVA-Google-Developer-Student-Club/Oct25GoogleEngineersWorkshop",
  },
  {
    img: `/image/events/Oct18.png`,
    category: "Info Session + Technical Workshop",
    title:
      "Utilizing HuggingFace Inference APIs to Conduct Sentiment Analysis on Sentences",
    desc: "Initial interest meeting for the GDSC on October 18, 2023 where we had a presentation about the club and then used a HuggingFace model to analyze the emotions of reviews that audience members had of the club.",
    date: "October 18, 2023",
    link: "https://github.com/UVA-Google-Developer-Student-Club/Oct18InterestMeeting",
  },
];

const EVENTS_TABS = ["Fall 2023", "Upcoming"];

export function EventSection() {
  const [activeTab, setActiveTab] = React.useState(EVENTS_TABS[0]);

  return (
    <section className="px-8 pt-12 pb-10 max-w-[1200px] mx-auto">
      <div className="container mx-auto mb-10 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Events
        </Typography>
        <Typography className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12 mb-8">
          At the GDG at UVA, we are committed to providing our members with
          opportunities to learn and grow. We host a variety of workshops and
          speaker events throughout the semester, ranging from technical
          workshops with Google Recruiters to presentations from world-renowned
          tech executives.
        </Typography>
        <div className="mt-8 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12"
              indicatorProps={{ className: "!bg-gray-400 rounded-lg" }}
            >
              {EVENTS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${
                      activeTab === book
                        ? "text-gray-100"
                        : "text-gray-500 capitalize"
                    }
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
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {EVENTS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
      {/* <div className="grid place-items-center">
        <Button className="mt-24" variant="outlined">
          Show more
        </Button>
      </div> */}
    </section>
  );
}

export default EventSection;
