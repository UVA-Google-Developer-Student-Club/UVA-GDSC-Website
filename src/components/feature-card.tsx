import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface FeatureCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-48 w-48 place-items-center rounded-xl text-white">
          <img src={Icon} className="rounded-full" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
