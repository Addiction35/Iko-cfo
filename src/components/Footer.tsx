import logo from "../assets/iko cfo logo.png";

export const Footer = () => {
const dataFooter = [
  {
    title: "Our Offices",
    content: ["Nairobi & Mombasa", "730 Maji Mazuri Road, Nairobi", ],
  },  
]

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
             <img src={logo} className="h-7 mr-2 object-contain rounded-2xl" alt="" />
            IKO CFO
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             LinkedIn
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             Facebook
            </a>
          </div>
        </div>



        <div className="hidden lg:flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#special-services"
              className="opacity-60 hover:opacity-100"
            >
              Services
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
             OUTSOURCED CFO SERVICES
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
             Partnerships
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
             What our clients think
            </a>
          </div>
        </div>

          {/* Right Section */}
          <div className="lg:flex justify-between">
            {dataFooter.map((footer, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg">{footer.title}</h4>
                {footer.content.map((item, idx) => (
                  <p key={idx} className="mt-3 opacity-60 hover:opacity-100 transition-colors cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
      </section>
      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 IKO CFO
        </h3>
      </section>

    </footer>
  );
};
