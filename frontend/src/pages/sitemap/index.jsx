import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
  const sitemapData = [
    {
      category: "Home",
      url: '/',
      description: "Welcome to World Disaster Center",
      links: []
    },
    {
      category: "About Us",
      url: "/about",
      description: "About WDC, who we are, how we work, our values, our strength",
      links: [
        { 
          title: "What We Offer", 
          url: "/about/what-we-offer"
        },
        { 
          title: "Our Vision", 
          url: "/about/vision"
        },
        { 
          title: "Our Values", 
          url: "/about/values"
        },
        { 
          title: "Our Mission", 
          url: "/about/mission"
        },
        {
          title: "Impact",
          url: "/impact"
        },
        { 
          title: "Meet Our Team", 
          url: "/about/team"
        },
        { 
          title: "Our Partners", 
          url: "/about/partners"
        },
        { 
          title: "Partner with Us", 
          url: "/about/partner-with-us"
        }
      ],
    },
    {
      category: "Tailored Solutions",
      url: "/solution",
      description: "Our innovative solutions strengthen disaster preparedness and accelerate real-time response",
      links: [
        { 
          title: "Michael: Real-Time Disaster Alerts", 
          url: "/cases/Michael"
        },
        {
          title: "Request Demo",
          url: "/request-demo"
        }
      ],
    },
    {
      category: "Global Products",
      url: "/global-products",
      description: "Our Global Products are designed to enhance disaster resilience and preparedness worldwide",
      links: [
        { 
          title: "Nostradamus Overview", 
          url: "/global-products/Nostradumus"
        },
        {
          title: "Crisis Atlas Platform",
          url: "/global-products/Crisis Atlas"
        }
      ],
    },
    {
      category: "News",
      url: "/News",
      description: "Latest news and updates about WDC",
      links: [
        {
          title: "UNFCCC AI Innovation Challenge Finals",
          url: "/News/WDC Reaches Finals of UNFCCC AI Innovation Challenge!"
        },
        {
          title: "Early Startup Award Winner",
          url: "/News/World Disaster Center Wins Early Startup Award at People Matters Rwanda Awards!"
        },
        {
          title: "Michael at HABITABLE Conference",
          url: "/News/Michael's Success Story at the HABITABLE Conference"
        }
      ],
    },
    {
      category: "Events",
      url: "/Events",
      description: "Upcoming events and conferences",
      links: [
        {
          title: "Esri Developer Summit",
          url: "/Events/Esri Developer & Technology Summit"
        },
        {
          title: "Climate Change Resilience",
          url: "/Events/Climate Change Resilience in Africa"
        },
        {
          title: "Kinshasa Workshop",
          url: "/Events/Workshop on Disaster Resilience in Kinshasa"
        }
      ],
    },
    {
      category: "Impact360 Newsletter",
      url: "/newsletter",
      description: "Get the latest updates on disaster resilience efforts, news, and events",
      links: [
        {
          title: "Achievements",
          url: "https://us22.campaign-archive.com/?u=c90ad2e6157e6eac27328c681&id=a448fd80a1"
        },
        {
          title: "Act Now for Tomorrow",
          url: "https://us22.campaign-archive.com/?u=c90ad2e6157e6eac27328c681&id=294e5e5d57"
        },
        {
          title: "Global Impact",
          url: "https://us22.campaign-archive.com/?u=c90ad2e6157e6eac27328c681&id=008b03f703"
        }
      ],
    },
    {
      category: "Get Involved",
      url: "/donate",
      description: "Act Now Before It's Too Late. Out of 8 billion people, only 1.4 billion feel safe from disasters",
      links: [
        { 
          title: "Donate", 
          url: "/donate"
        },
        { 
          title: "Careers", 
          url: "/careers"
        },
        { 
          title: "Membership", 
          url: "/membership"
        },
        { 
          title: "Contact Us", 
          url: "/contact"
        },
      ],
    },
    {
      category: "Legal",
      url: "/terms-conditions",
      description: "Legal information and policies",
      links: [
        {
          title: "Terms & Conditions",
          url: "/terms-conditions"
        },
        {
          title: "Privacy Policy",
          url: "/policy"
        }
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Site Map</h1>

      <div className="space-y-12">
        {sitemapData.map((category) => (
          <div key={category.category} className="border-b border-gray-700 pb-8">
            <Link
              to={category.url}
              className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-colors mb-2 block"
            >
              {category.category}
            </Link>

            <p className="text-gray-400 mb-6">{category.description}</p>

            <ul className="space-y-4 md:space-y-6 pl-6">
              {category.links.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMap;