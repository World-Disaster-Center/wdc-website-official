import React, { useState, useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { FaUserShield, FaUsers, FaSchool, FaHandsHelping, FaTools, FaSatelliteDish, FaCity, FaUserFriends, FaShieldAlt } from "react-icons/fa"; // Import icons
import BeforeAfterVisual from "./BeforeAfterVisual";
import story from "../assets/images/onedollarstory.png";

function DonationSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "But HOPE starts with YOU.";

  // Typewriter Effect
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  return (
    <Section className="overflow-hidden" id="donation">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center">
        <Heading tag="Donate Generously" title="Act Now Before It's Too Late." />

        {/* Section 2: Global Disaster Safety Overview */}
        <div className="rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
          <p className="text-lg text-gray-700">
            Out of 8 billion people, only 1.4 billion feel safe from disasters. For the rest, every day is a battle against uncertainty.
          </p>
          <div className="flex justify-center mt-8">
            {/* Typewriter Effect */}
            <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center p-4">
              <p className="text-gray-900 text-3xl lg:text-5xl font-bold break-words">
                {displayedText.split("HOPE")[0]}
                <span className="text-blue-400">HOPE</span>
                {displayedText.split("HOPE")[1]?.split("YOU")[0]}
                <span className="text-blue-400">YOU</span>
                {displayedText.split("YOU")[1]}
                {showCursor && <span className="blinking-cursor">|</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Impact of $5 Donation */}
       {/* Section 3: Impact of $5 Donation */}
<div className="bg-white rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
    What Your $5 Can Do
  </h2>
  <p className="text-md sm:text-lg text-gray-700">
    Just $5 provides one family with access to the Michael app, giving them the tools they need to stay safe.
  </p>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-5xl mb-2">
        <span className="inline-block">$</span>
        <span className="inline-block">5</span>
      </div>
      <p className="text-sm sm:text-base font-medium">Donation</p>
    </div>
    <div className="text-2xl sm:text-3xl text-gray-600">→</div>
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-5xl mb-2">
        <i className="fas fa-globe"></i> {/* Replace with your globe icon */}
      </div>
      <p className="text-sm sm:text-base font-medium">Michael App Access</p>
    </div>
    <div className="text-2xl sm:text-3xl text-gray-600">→</div>
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-5xl mb-2">
        <i className="fas fa-users"></i> {/* Replace with your family icon */}
      </div>
      <p className="text-sm sm:text-base font-medium">Increased Safety for One Family</p>
    </div>
  </div>
</div>


        {/* Section 4: Where Your $1 Monthly Goes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Journey of Every $1
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your $1 monthly donation helps empower communities with life-saving tools and sustainable rebuilding solutions.
          </p>

          {/* Circles with Icons and Text */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[ 
              { icon: FaShieldAlt, text: "PROACTIVE DISASTER RISK REDUCTION" },
              { icon: FaTools, text: "EQUIP LOCAL RESPONDERS WITH TOOLS" },
              { icon: FaSatelliteDish, text: "DEVELOP ADVANCED TECHNOLOGIES" },
              { icon: FaCity, text: "REBUILD COMMUNITIES TO BE SAFER" },
              { icon: FaUserFriends, text: "CONNECT EXPERTS AND LOCALS" },
              { icon: FaHandsHelping, text: "DISASTER RESPONSE PROGRAMS" },
            ].map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-blue-100 rounded-full w-32 h-32 sm:w-40 sm:h-40 p-4 shadow-md"
              >
                <Icon className="text-blue-600 text-4xl mb-2" />
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Call to Action with Donation Boxes */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-12 mb-12 w-full max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            One Small Step for You, One Giant Leap for Safety
          </h2>
          <p className="text-lg mb-12">
            One donation. Countless lives changed. A safer world for all. Choose a donation tier and help us save lives.
          </p>

          {/* Three Equal-Sized Donation Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {
                icon: FaUserShield,
                title: "$5 = Access for one person",
                description: "Provide one person with access to the Michael app for disaster preparedness.",
              },
              {
                icon: FaUsers,
                title: "$10 = Access for two people",
                description: "Help two people prepare for disasters with the Michael app and a chance to stay safe.",
              },
              {
                icon: FaSchool,
                title: "$50 = Community Safety",
                description: "Provide safety training for 10 individuals in vulnerable communities.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <Icon className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=XXS7D6VJDM2YE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all">
                    Donate Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default DonationSection;
