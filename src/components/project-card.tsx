import React from "react";
import Image from "next/image";

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

interface BookCardProps {
  img: string;
  title: string;
  desc: string;
  category: string;
  price: string;
  offPrice?: string;
  date: string;
  link: string;
}

export function BookCard({
  img,
  category,
  title,
  desc,
  price,
  offPrice,
  date,
  link,
}: BookCardProps) {
  return (
    <Card color="transparen t" shadow={false}>
      {/* <CardHeader color="gray" floated={false} className="mx-0 mt-0 mb-6">
        <Image
          width={1080}
          height={1080}
          src={img}
          alt={title}
          className="h-full w-full scale-[1] object-cover object-center"
        />
      </CardHeader> */}
      <div className="flex relative w-full items-center justify-center mb-8">
        <Image
          width={1080}
          height={1080}
          src={img}
          alt={title}
          className="rounded-xl h-3/4 w-3/4 scale-[1] object-cover object-center"
        />
      </div>
      <CardBody className="p-0">
        <Typography
          color="blue"
          className="mb-1 text-xs !font-semibold text-center"
        >
          {category}
        </Typography>
        <Typography
          color="p"
          className="mb-2 text-xs !font-semibold text-center"
        >
          {date}
        </Typography>
        <a href={link} target="_blank">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 font-bold normal-case text-center"
          >
            {title}
          </Typography>
        </a>
        <Typography className="mb-4 font-normal !text-gray-500 text-center">
          {desc}
        </Typography>
        <div className="flex gap-2">
          <Typography
            variant="h5"
            color="blue-gray"
            className={offPrice ? "line-through" : ""}
          >
            {price}
          </Typography>
          <Typography variant="h5" color="red">
            {offPrice}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
export default BookCard;
