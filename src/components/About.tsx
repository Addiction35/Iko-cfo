import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pilot from "../assets/Rupal.jpeg";
import { LightBulbIcon } from "./Icons";
import { EyeOpenIcon } from "@radix-ui/react-icons";


export const About = () => {
  return (
    <section
      id="about"
      className="container py-18 sm:py-28"
    >
      <div className="bg-muted/50 border rounded-lg py-2">
        <div className="px-3 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b  from-red-400 to-purple-500 text-transparent bg-clip-text">
                  Company{" "}
                </span>
               Profile
              </h2>
              <p className="lg:text-xl text-muted-foreground mt-4">
              <span className="font-semibold text-blue-600">IKO CFO</span> is a premier financial consultancy firm in East Africa, 
                led by <span className="font-semibold text-gray-800 dark:text-blue-600">Rupal Sheth</span>, a seasoned financial architect with over two 
                decades of experience across various sectors including manufacturing, automotive, FMCG, and retail.With a Mission to transform complex business environments into streamlined, profitable entities. 
                We specialize in business restructuring, leadership solutions, fundraising, business automation, and improved cash flow management. 
                Our approach combines cutting-edge financial strategies with practical, real-world solutions to drive sustainable growth and operational excellence.
              </p>
              
            </div>
               {/*Vission and Mision*/}
            <div className="flex flex-col lg:flex-row justify-center gap-8">
                <Card className="relative lg:w-[350px]   drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-gradient-to-b  from-red-400 to-purple-500  p-1 rounded-2xl">
                      <LightBulbIcon />
                    </div>
                    <div>
                      <CardTitle>Vision</CardTitle>
                      <CardDescription className="text-md mt-2">
                      To be the most trusted and innovative financial consultancy firm in East Africa,
                      empowering businesses to achieve sustainable growth and operational excellence.
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                  {/*Vission and Mision*/}
                <Card className="relative lg:w-[550px]   drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                  <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1   bg-gradient-to-b  from-red-400 to-purple-500 p-1 rounded-2xl">
                      <EyeOpenIcon  className="w-12 mx-auto h-12 text-black text-2xs dark:text-white"/>
                    </div>
                    <div>
                      <CardTitle>Mission</CardTitle>
                      <CardDescription className="text-md mt-2">
                      Provide comprehensive financial and operational solutions that shift businesses from chaos to order, 
                      driving resource efficiencies and sustainable profitability. 
                      We aim to demystify financial complexities and make high-level advisory services accessible and actionable for our clients.
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
