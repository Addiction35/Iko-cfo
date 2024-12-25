import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/Funding.png";
import image3 from "../assets/Image2.png";
import image4 from "../assets/Image1.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Business Process Optimization",
    description:
      "Streamline your operations and financial workflows to maximize efficiency and reduce costs. Our Fractional CFOs identify bottlenecks, implement innovative solutions, and align processes with your strategic goals, helping your business operate at peak performance.",
    image: image4,
  },
  {
    title: "Expert budgeting & forecasting",
    description:
      "Take control of your finances with precise budgeting and accurate forecasting. Our CFOs develop data-driven financial plans tailored to your business, ensuring you’re prepared for growth, market changes, and strategic decision-making.",
    image: image3,
  },
  {
    title: "Funding Acquisition Expertise",
    description:
      "Secure the resources you need to grow your business. From preparing investor-ready financial documents to negotiating funding terms, our CFOs guide you through every step of the funding process to ensure success.",
    image: image,
  },
];

const featureList: string[] = [
  "Finance Automation",
  "Financial modelling",
  "Expert budgeting & forecasting",
  "Enhanced cash flow visibility",
  "Streamline month end + year end closures",
  "Visualized dashboards",
];

export const Features = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        OutSourced{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
         CFO
        </span>
        {" "}Services
      </h2>

      <div>
        <p>A Fractional CFO is an experienced financial leader who provides high-level strategic and 
        operational financial guidance to businesses on a part-time or project basis. Perfect for growing companies, 
        startups, or organizations seeking expert financial management without the commitment of a full-time hire.
        </p>
      </div>

      <div className="flex flex-wrap  md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature} className="hover:scale-110 duration-200 cursor-pointer">
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="hover:shadow-2xl p-0 hover:scale-110 duration-200">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter >
              <img
                src={image}
                alt="Our services"
                className=" object-cover"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
