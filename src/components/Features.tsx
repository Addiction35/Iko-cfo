import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/funding.jpg";
import image3 from "../assets/budget.jpg";
import image4 from "../assets/Business.jpg";

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
      className="container p-2 mt-4 space-y-4 space-x-2"
    >
      <h2 className="text-2xl pt-2 lg:text-4xl dark:text-black font-bold ">
        OutSourced{" "}
        <span className="bg-gradient-to-b  from-red-400 to-purple-500 text-transparent bg-clip-text">
         CFO
        </span>
        {" "}Services
      </h2>

      <div >
        <p className="dark:text-black text-muted-foreground">A Fractional CFO is an experienced financial leader who provides high-level strategic and 
        operational financial guidance to businesses on a part-time or project basis. Perfect for growing companies, 
        startups, or organizations seeking expert financial management without the commitment of a full-time hire.
        </p>
      </div>

      <div className="flex flex-wrap  md:justify-center gap-2">
        {featureList.map((feature: string) => (
          <div key={feature} className="hover:scale-95 duration-200 cursor-pointer">
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
          <Card key={title} className="hover:shadow-2xl p-0  duration-200">
             <img
                src={image}
                alt="Our services"
                className="w-full rounded"
              />
              <CardHeader>
           
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardFooter >

              <CardContent>{description}</CardContent>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
