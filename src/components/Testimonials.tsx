import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "The attention to detail and the quality of service we received was outstanding. The team went above and beyond to meet our needs",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "The level of expertise and industry knowledge demonstrated by the team was impressive. They provided valuable insights that helped us make informed decisions.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe ",
    userName: "@john_Doe2",
    comment:
      "We appreciated the timely responses and clear communication throughout our collaboration. It made the process seamless and efficient.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "@john_Doe3",
    comment:
      "They don’t just react to issues; they anticipate challenges and provide proactive solutions. This has saved us both time and money.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe ",
    userName: "@john_Doe4",
    comment:
      "Working with them feels like having a true partner in our business. They are committed to our success and genuinely care about our goals.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe ",
    userName: "@john_Doe5",
    comment:
      "Since partnering with them, we have seen a significant improvement in our financial processes and overall efficiency. Their support has been invaluable.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover What
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Our Clients{" "}
        </span>
        Think
      </h2>

      <p className="lg:text-xl text-muted-foreground pt-4 pb-8">
      At <span className="text-blue-500 font-bold">IKO CFO</span>, we pride ourselves on delivering exceptional financial services tailored to meet the unique needs of our clients. Our commitment to excellence and dedication to building strong partnerships have earned us glowing feedback from those we serve. 
      Here’s what some of our clients have to say about their experiences with us:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
