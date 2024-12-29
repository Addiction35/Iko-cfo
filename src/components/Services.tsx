import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/Service.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Enhanced cash flow visibility",
    description:
      "Gain real-time insights into your cash flow to effectively manage expenses, optimize working capital, and drive sustainable growth.",
    icon: <ChartIcon />,
  },
  {
    title: "Expert budgeting & forecasting",
    description:
      "Plan confidently with tailored budgets and forecasts designed to support strategic growth and adaptability in any market",
    icon: <WalletIcon />,
  },
  {
    title: "Finance Automation",
    description:
      "Optimize efficiency by automating financial processes, minimizing errors, and freeing up valuable resources for your business.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="special-services"  className="container p-2 mt-4">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl dark:text-black font-bold">
            <span className="bg-gradient-to-b  from-red-400 to-purple-500 text-transparent bg-clip-text">
              Specialized{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground lg:text-xl mt-4 mb-8 ">
          Comprehensive Financial Services Tailored Specifically for Your Unique Business Needs

          </p>

          <div className="flex flex-col gap-5">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-gradient-to-b from-red-400 to-purple-500  p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-full lg:mt-24  rounded object-contain"
          alt="About services"
        />
        
      </div>
    </section>
  );
};
