import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import BoardImage from "./assets/White.png"
import { Testimonials } from "./components/Testimonials";
import Illustrate from "./assets/8348318-uhd_3840_2160_25fps.mp4";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
    <section className="relative  overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0">
      <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={Illustrate} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      </div>

      {/** shapedivider */}
      <div className="custom-shape-divider-bottom-1733999735 ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
          </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-16">
        <Hero />
        <Sponsors />
      </div>
    </section>

      <section className="relative ">
      <About />
      </section>
      <Cta />
      <section className={`inset-0 bg-opacity-90 bg-cover bg-center`} style={{ backgroundImage: `url(${BoardImage})` }}>
      <Features />
      <Services />
      </section>
    

      <section className="">
      <Testimonials />
      <Team />
      </section>
      <Footer />
      <ScrollToTop /> 


    </>
  );
}

export default App;
