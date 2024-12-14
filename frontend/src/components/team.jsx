import React, { useState } from "react";
import Anne from "../assets/team/anne.png";
import Anselme from "../assets/team/AnselmeKonan.png";
import Ayuba from "../assets/team/AyubaAbubakar.png";
import choice from "../assets/team/choice.png";
import davidk from "../assets/team/DavidKabanga.png";
import davidmulume from "../assets/team/davidmulume.png";
import doddy from "../assets/team/DoddyMatabaro.png";
import isaac from "../assets/team/isaac.png";
import james from "../assets/team/james.png";
import jane from "../assets/team/Jane.png";
import josephb from "../assets/team/joseph.png";
import kibwe from "../assets/team/kibwe.png";
import ledoux from "../assets/team/LedouxMedi.png";
import marie from "../assets/team/marie.png";
import oluwan from "../assets/team/Oluwandosin.png";
import Rolande from "../assets/team/RolandeNamegabe.png";
import Ruth from "../assets/team/Ruth.png";
import samchen from "../assets/team/samchen.png";
import zainab from "../assets/team/Zainab.png";
import sapiens from "../assets/team/sapiens.png";
import WDCLogo from "../assets/images/wdclogobg.png";
import lilla from "../assets/team/lilla.png";
import manho from "../assets/team/man-ho.png";
import francine from "../assets/team/francine.png";
import norbert from "../assets/team/norbert.png";
import boaz from "../assets/team/boaz.png";
import elvis from "../assets/team/elvis.png";

function TeamPage() {
  const founders = [
    {
      location: "Qatar",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Zainab A.",
      image: zainab,
    },
    {
      location: "Austria",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Sapiens Ndatabaye",
      image: sapiens,
    },
    {
      location: "USA",
      title: "Founder",
      bio: "",
      email: "",
      socials: [],
      name: "Rolande Namegabe",
      image: Rolande,
    },
  ];
  const ClevelExecutives = [
    {
      location: "Canada",
      title: "Chief Executive Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Choice Ufuoma Okoro",
      image: choice,
    },
    {
      location: "Kenya",
      title: "Chief Information Officer",
      bio: "",
      email: "",
      socials: [],
      name: "James Mbogo",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "Chief Technical Officer",
      bio: "",
      email: "",
      socials: [],
      name: "David Kabanga",
      image: davidk,
    },
  ];

  const TeamLeads = [
    {
      location: "DRC",
      title: "Information System",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Bakulikira",
      image: josephb,
    },
    // {
    //   location: "DRC",
    //   title: "Policy and Strategy",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Anne Nduku",
    //   image: Anne,
    // },
    {
      location: "Egypt",
      title: "Research Analysis and Digital Innovation",
      bio: "",
      email: "",
      socials: [],
      name: "David Mulume",
      image: davidmulume,
    },
    {
      location: "Kenya",
      title: "Forecast",
      bio: "",
      email: "",
      socials: [],
      name: "Ruth Ndegwa",
      image: Ruth,
    },
    {
      location: "Germany",
      title: "Advocacy",
      bio: "",
      email: "",
      socials: [],
      name: "Lilla Albert",
      image: lilla,
    },
  ];

  const interns = [
    {
      location: "",
      title: "Forecast Intern",
      bio: "",
      email: "",
      socials: [],
      name: "Gagana Md",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Forecast Volunteer",
      bio: "",
      email: "",
      socials: [],
      name: "Man Ho Wong",
      image: manho,
    },
  ];

  const staffs = [
    {
      location: "Ivory Coast",
      title: "Data Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Anselme Konan",
      image: WDCLogo,
    },
    {
      location: "Ghana",
      title: "Drones Expert",
      bio: "",
      email: "",
      socials: [],
      name: "Ayuba Abubakar",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Boaz Muliri",
      image: boaz,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Danny Kikwaya",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "Full Stack Developer",
      bio: "",
      email: "",
      socials: [],
      name: "Doddy Matabaro",
      image: doddy,
    },
    {
      location: "DRC",
      title: "UX Designer",
      bio: "",
      email: "",
      socials: [],
      name: "John Kibwe",
      image: kibwe,
    },

    {
      location: "Ghana",
      title: "Communication and Social Media Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Ellen Samche",
      image: WDCLogo,
    },
    {
      location: "DRC",
      title: "Data Scientist",
      bio: "",
      email: "",
      socials: [],
      name: "Le Doux Medi",
      image: ledoux,
    },
    {
      location: "",
      title: "IT and Cyber Security Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Elvis Matara",
      image: elvis,
    },
    {
      location: "",
      title: "Finance & HR Officer",
      bio: "",
      email: "",
      socials: [],
      name: "Francine Nabintu",
      image: francine,
    },
    {
      location: "DRC",
      title: "GIS Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Isaac Ntabala",
      image: isaac,
    },
    {
      location: "DRC",
      title: "AI Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Joseph Kaniki",
      image: WDCLogo,
    },

    // {
    //   location: "Burundi",
    //   title: "",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Shanice",
    //   image: bujumbura,
    // },
    // {
    //   location: "Germany",
    //   title: "",
    //   bio: "",
    //   email: "",
    //   socials: [],
    //   name: "Maria",
    //   image: maria,
    // },
    {
      location: "Kenya",
      title: "Geospacial Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Mary Muthee",
      image: marie,
    },
    {
      location: "USA",
      title: "Visualization Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Oluwandosin Agbolabori",
      image: oluwan,
    },
    {
      location: "",
      title: "Cybersecurity Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Elvis Matara",
      image: WDCLogo,
    },
    {
      location: "Italy",
      title: "Information Management Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Lorenzo Libertini",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Geospatial Analyst",
      bio: "",
      email: "",
      socials: [],
      name: "Mucyo Ndera",
      image: WDCLogo,
    },
    {
      location: "",
      title: "GIS Expert",
      bio: "",
      email: "",
      socials: [],
      name: "Nakato Jane Hope",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Forecast Consultant",
      bio: "",
      email: "",
      socials: [],
      name: "Narayan Adhikari",
      image: WDCLogo,
    },
    {
      location: "",
      title: "UI and UX Designer",
      bio: "",
      email: "",
      socials: [],
      name: "Norbert Balisha",
      image: norbert,
    },
    {
      location: "",
      title: "AI Team Lead",
      bio: "",
      email: "",
      socials: [],
      name: "Seraphin Baributsa",
      image: WDCLogo,
    },
    {
      location: "",
      title: "Communication Specialist",
      bio: "",
      email: "",
      socials: [],
      name: "Yacinthe Keiza",
      image: WDCLogo,
    },
  ];

  const team_data = {
    founders: founders,
    clevelexecutives: ClevelExecutives,
    "team leads": TeamLeads,
    interns: interns,
    staff: staffs,
  };

  const handleChangeTeamKey = (new_key) => {
    setTeamKey(new_key);
  };

  const [teamkey, setTeamKey] = useState("founders");

  return (
    <div>
      <br />
      <section className="bg-white dark:bg-n-8">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Meet Our Team
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            At World Disaster Center, our team is the heart and soul of our
            mission. We are a diverse group of dedicated professionals, united
            by our passion for making a positive impact in the world. Each
            member brings unique skills and experiences that drive our
            initiatives forward.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
              <button
                onClick={() => {
                  handleChangeTeamKey("founders");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "founders"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Founders
              </button>
              <button
                onClick={() => {
                  handleChangeTeamKey("clevelexecutives");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "clevelexecutives"
                    ? "bg-blue-600 text-white"
                    : " transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Executives
              </button>
              <button
                onClick={() => {
                  handleChangeTeamKey("team leads");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "team leads"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Team Lead
              </button>
              <button
                onClick={() => {
                  handleChangeTeamKey("staff");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "staff"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Staff
              </button>
              <button
                onClick={() => {
                  handleChangeTeamKey("interns");
                }}
                className={`px-4 py-2 text-sm font-medium md:py-3  rounded-xl md:px-12 capitalize ${
                  teamkey === "interns"
                    ? "bg-blue-600 text-white"
                    : "transition-colors duration-300 md:py-3 text-blue-600 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white"
                }`}
              >
                Interns & Volunteers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {teamkey === "founders" &&
              team_data.founders.map((member, index) => {
                return (
                  <div
                    key={`${index}-member`}
                    className="flex flex-col items-center"
                  >
                    <div className="" style={{ background: "#ffffffaa" }}>
                      <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={member?.image}
                        alt={member.name}
                        style={{ height: "200px", aspectRation: "4:3" }}
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {member.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                      {member?.title}
                    </p>
                  </div>
                );
              })}

            {teamkey === "clevelexecutives" &&
              team_data.clevelexecutives.map((member, index) => {
                return (
                  <div
                    key={`${index}-member`}
                    className="flex flex-col items-center"
                  >
                    <div className="" style={{ background: "#ffffffaa" }}>
                      <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={member?.image}
                        alt={member.name}
                        style={{ height: "200px", aspectRation: "4:3" }}
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {member.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                      {member?.title}
                    </p>
                  </div>
                );
              })}

            {teamkey === "team leads" &&
              team_data["team leads"].map((member, index) => {
                return (
                  <div
                    key={`${index}-member`}
                    className="flex flex-col items-center"
                  >
                    <div className="" style={{ background: "#ffffffaa" }}>
                      <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={member?.image}
                        alt={member.name}
                        style={{ height: "200px", aspectRation: "4:3" }}
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {member.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                      {member?.title}
                    </p>
                  </div>
                );
              })}

            {teamkey === "staff" &&
              team_data.staff.map((member, index) => {
                return (
                  <div
                    key={`${index}-member`}
                    className="flex flex-col items-center"
                  >
                    <div className="" style={{ background: "#ffffffaa" }}>
                      <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={member?.image}
                        alt={member.name}
                        style={{ height: "200px", aspectRation: "4:3" }}
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {member.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                      {member?.title}
                    </p>
                  </div>
                );
              })}

            {teamkey === "interns" &&
              team_data.interns.map((member, index) => {
                return (
                  <div
                    key={`${index}-member`}
                    className="flex flex-col items-center"
                  >
                    <div className="" style={{ background: "#ffffffaa" }}>
                      <img
                        className="object-cover w-full rounded-xl aspect-square"
                        src={member?.image}
                        alt={member.name}
                        style={{ height: "200px", aspectRation: "4:3" }}
                      />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {member.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                      {member?.title}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
