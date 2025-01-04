import React from "react";
import { toast } from "react-toastify";
import Section from "../../components/Section";
import Heading from "../../components/Heading";

function CareerPage() {
  return (
    <Section className="overflow-hidden" id="career">
      <div className="container flex flex-col justify-center items-center">
        <Heading
          tag="Consider a career here"
          title="Career Opportunities"
          text={`Dream of making a global impact while achieving personal goals? Join WDC, where your work will help shape a safer, better world. We welcome talent from all backgrounds.`}
        />

        {/* Open Volunteering Positions Section */}
        <div className="w-full mt-12 bg-white border border-gray-300 p-6 rounded-lg shadow-md max-w-4xl">
          <h5 className="text-gray-900 text-center text-2xl font-bold mb-4">
            Open Volunteering Positions
          </h5>
          <div className="flex flex-col gap-4">
            {[
              {
                position: "Website Design and Development",
                link: "https://www.volunteermatch.org/search/opp3853051.jsp",
              },
              {
                position: "Graphic Designers",
                link: "https://www.volunteermatch.org/search/opp3853054.jsp",
              },
              {
                position: "Legal Consultant",
                link: "https://www.volunteermatch.org/search/opp3853064.jsp",
              },
              {
                position: "Grant Writer",
                link: "https://www.volunteermatch.org/search/opp3853049.jsp",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <h3 className="text-gray-800 text-lg font-medium">{item.position}</h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all">
                    Apply
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CV Submission Section */}
        <div className="w-full mt-12 bg-gradient-to-l from-green-600 to-indigo-600 p-8 rounded-lg shadow-md max-w-4xl text-center">
          <h3 className="text-white text-3xl font-bold mb-4">Don't see the role you're interested in?</h3>
          <p className="text-indigo-100 text-lg mb-6">
            We’re always looking for talented people to join our team. Send us your CV and we will contact you for any future roles.
          </p>
          <button
            onClick={() => toast("Coming Soon", { theme: "dark" })}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-all"
          >
            Send Your CV
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block ml-2"
            >
              <path
                d="M2.75 11L17.4167 11M12.8333 16.5L17.6852 11.6482C17.9907 11.3426 18.1435 11.1898 18.1435 11C18.1435 10.8102 17.9907 10.6574 17.6852 10.3518L12.8333 5.5"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Fraud Alert and Equal Opportunity Employer Section */}
        <div className="w-full mt-12 flex flex-col gap-6 items-center">
          {/* Fraud Alert Section */}
          <div className="bg-red-100 border border-red-400 p-6 rounded-lg shadow-md w-full max-w-4xl text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-4 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-red-700">Fraud Alert</h3>
            </div>
            <p className="text-gray-700 mb-4">
              World Disaster Center and other charitable organizations are
              occasionally subject to phishing attacks (e.g., scams sent by
              email, text, mail). These scams often involve agencies or
              individuals impersonating or claiming to be acting on World
              Disaster Center’s behalf with regards to recruiting or
              facilitating the hiring of personnel.
            </p>
            <p className="text-gray-700 mb-4">
              Please note, we do not extend offers of employment or make
              requests for personal information unless a candidate formally
              applies for a position on our World Disaster Center careers
              site.
            </p>
            <p className="text-gray-700">
              If you have received an email in connection with a job or
              financial opportunity, we urge you not to respond. These emails
              are not legitimate. Either delete the email or report it to{" "}
              <a
                href="https://www.ic3.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.ic3.gov
              </a>
              .
            </p>
          </div>

          {/* Equal Opportunity Employer Section */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-4xl text-center">
            <h3 className="text-xl font-bold mb-4">Equal Opportunity Employer</h3>
            <p className="text-gray-300">
              World Disaster Center is an equal-opportunity employer. We conduct
              hiring without regard to race, color, ancestry, national origin,
              citizenship, age, sex, marital status, parental status, membership
              in any labor organization, political ideology, or disability of an
              otherwise-qualified individual.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CareerPage;
