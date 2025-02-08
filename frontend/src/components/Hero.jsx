import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { MdTornado, MdCloud } from "react-icons/md";
import { FaWater, FaWaveSquare } from "react-icons/fa";
import GIF1 from "../assets/gif/WDC_Shorts.gif";
import VID1 from "../assets/video/Digital World Map.mp4";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("userAuth"))
  );
  const location = useLocation();

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("userAuth")));
  }, [location]);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <video
        className="absolute backgroundImageGif object-cover brightness-50 h-screen"
        autoPlay={true}
        loop={true}
        muted
      >
        <source src={VID1} type="video/mp4" />
      </video>
      <div className="container relative" ref={parallaxRef}>
        <div className="lg:h-screen lg:mt-[5vh]">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] ">
            <h1 className="h1 mb-10 animate-scale-up">
              <span className="whitespace-normal">
                The Global Disaster {` `}
                <br className="hidden sm:block" />
                Monitoring and Alert System
              </span>
              {` `}
              <span
                className="inline-block relative leading-tight"
                style={{
                  background:
                    "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "130%",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                Michael{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p
            className="body-1 max-w-[91%] mx-auto mb-6 text-n-2 font-normal lg:mb-12 animate-scale-up"
            style={{ textShadow: "1px 1px 2px rgba(40, 40, 40, 0.4)" }}
            >
              Michael harnesses advanced AI and real-time data to deliver
              life-saving insights, empowering you to navigate disasters with
              confidence and control.
            </p>
            <Button href={"/cases/Michael"} white className="animate-scale-up">
              {"Learn more about michael"}
            </Button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="lg:-mt-56">
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />

              <Link to="/request-demo">
                <div className="cursor-pointer overflow-hidden">
                  <img
                    src={GIF1}
                    className="w-full object-contain"
                    alt="AI"
                  />
                </div>
                </Link>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
