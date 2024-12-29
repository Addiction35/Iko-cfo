import Lecol from "../assets/Lecol_Logo.png"
import Matchmasters from "../assets/MAtchMasters.png"
import CTM from "../assets/CTM.png"
import Dawa from "../assets/Dawa-Life-Logo.jpg"
import Nissan from "../assets/nissan-6.svg"


interface SponsorProps {
  logo: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    logo: Lecol,
    name: "LECOL",
  },
  {
    logo: Matchmasters,
    name: "Match Masters",
  },
  {
    logo: CTM,
    name: "CTM",
  },
  {
    logo: Dawa,
    name: "Dawa Life",
  },
  {
    logo: Nissan,
    name: "Nissan",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container  p-2 m-4 "
    >
      <h3 className="text-center  text-sm dark:text-black lg:text-xl lg:mb-4 font-extrabold  text-theme-color">
       Companies We've Worked with:
      </h3>

      <div className="w-full flex justify-center gap-1  md:gap-8">
        {sponsors.map(({ logo, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2  rounded "
          >
            <img src={logo} alt="Logos" className="h-8 w-auto  rounded hover:scale-150 duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};
