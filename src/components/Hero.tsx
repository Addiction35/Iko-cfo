import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";



export const Hero = () => {
  return (
    <section id="home" className="container  grid lg:grid-cols-2 place-items-center  py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Transforming
            </span>{" "}
            Financial
          </h1>{" "}
          Chaos{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Into
            </span>{" "}
            Sustainable Growth
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Powering Your Growth One financial Solution At A Time

        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Learn More</Button>

          <a
            rel="noreferrer noopener"
            href=""
            className={`w-full md:w-1/3 hover:shadow-2xl duration-200 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Contact Us
          </a>
        </div>
      </div>



      {/* Shadow effect */}
      <div className="shadow "></div>
    </section>
  );
};
