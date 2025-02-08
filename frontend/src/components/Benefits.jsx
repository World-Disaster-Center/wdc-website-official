import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import DottedWorld from "../assets/hero/dottedWord.jpg";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <Section id="features" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What We Offer"
          tag=" Benefits"
        />

        <div className="flex flex-wrap gap-2 mb-10 justify-between">
          {benefits.map((item) => (
            <Link
              to={item.url === "" ? "/" : item.url}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] flex-grow md:basis-[35%]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[18rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-3">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  /> */}

                  <a
                    href={item?.url}
                    className="ml-auto font-code text-xs font-bold uppercase tracking-wider hover:text-cyan-300"
                  >
                    {item?.url === "" ? "Coming soon" : "Explore more"}
                  </a>

                  {item?.url === "" ? "" : <Arrow />}
                </div>
              </div>

              {item.light && <GradientLight />}
              <GradientLight />
              <div
                className="absolute inset-0.5 hover:scale-105"
                style={{
                  clipPath: "url(#benefits)",
                  background: "transparent",
                  backdropFilter: "blur(40px)",
                  border: "1px solid #ffaass",
                  borderLeft: "2px solid #5948b8",
                  borderBottom: "2px solid #6e71ff44",
                }}
              >
                <div className="absolute inset-0 transition-opacity ">
                  {item.imageUrl && (
                    <img
                      src={DottedWorld}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
