import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import SignIn from "./pages/signin";
import SiteMap from "./pages/sitemap";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/signup";
import AdminPage from "./pages/admin";
import ProfilePage from "./pages/profile";
// import BlogsPage from "./pages/blogs";
import SingleBlogDisplay from "./pages/blog";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import DonorsPage from "./pages/donors";
import VisionPage from "./pages/vision";
import OurValuePage from "./pages/value";
import MissionPage from "./pages/mission";
import ProjectsPage from "./pages/project";
import WhatWeOfferPage from "./pages/offer";
import Testing from "./pages/recordPage.jsx";
import EagleProject from "./pages/project/eagle";
import { useEffect, useState } from "react";
import TeamPage from "./components/team.jsx";
import PartnersPage from "./components/partner";
import MembershipPage from './pages/membership/index.jsx'
import ImpactPage from './pages/impact/index.jsx'
import ProfileForm from "./pages/profileForm";
import UpdateProfile from "./pages/updateProfile";
import TypePage from "./pages/typePage";
import ProfileEnterprisePage from "./pages/ProfileEnterprisePage";
import ChatBotComponent from "./components/chatbot";
import LoaderAnimation from "./components/loading";
import NewFooter from "./components/newFooter.jsx";
import NewsLetterPage from "./pages/newletter/index.jsx";
import CareerPage from "./pages/career/index.jsx";
import DemoPage from "./pages/demo/index.jsx";
import CaseDetail from "./components/CaseDetail.jsx";
import PrivacyPolicyPage from "./pages/privacyPolicy/index.jsx";
import TermsAndConditionPage from "./pages/termsCondition/index.jsx";
import WhatWeDo from "./pages/solution/index.jsx";
import Products from "./pages/product/index.jsx";
import News from "./pages/news/index.jsx";
import Events from "./pages/events/index.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import Story from './pages/story/index.jsx'
import Africa from './pages/where_we_work/africa/index.jsx'
import PartnerWithUs from './pages/partnerWithUs/index.jsx';

import NewsDetail from "./components/NewsDetail.jsx";
import EventsDetail from "./components/EventsDetail.jsx";

import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    setLoading(true);
     
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? <LoaderAnimation /> : null}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile/individual/complete/:id"
            element={<ProfileForm />}
          />
          <Route
            path="/profile/enterprise/complete/:id"
            element={<ProfileEnterprisePage />}
          />
          <Route
            path="/profile/npo/complete/:id"
            element={<ProfileEnterprisePage />}
          />
          <Route path="/profile/type/:id" element={<TypePage />} />
          <Route path="/profile/update/:id" element={<UpdateProfile />} />
          {/* <Route path="/ms73700841.txt" element={<Testing />} /> */}

          <Route path="/solution" element={<WhatWeDo />} />
          <Route path="/global-products" element={<Products />} />

          {/* <Route exact path="/blogs2" element={<BlogsPage />} /> */}
          <Route path="/blog/:id" element={<SingleBlogDisplay />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route path="/about/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/values" element={<OurValuePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/where-we-work/africa" element={<Africa />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/newsletter" element={<NewsLetterPage />} />
          <Route path="/request-demo" element={<DemoPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/donate" element={<DonorsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/eagle" element={<EagleProject />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditionPage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/sitemap" element={<SiteMap />} />

          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />

          <Route
            path="/management/wdc/worddisastercenter/admin"
            element={<AdminPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Dynamic route for cases */}
        <Route path="/cases/:caseName" element={<CaseDetail />} />
          <Route path="*" element={<NotfoundPage />} />

        <Route path="/News/:newsName" element= {<NewsDetail />} />
        <Route path="/global-products/:productName" element= {<ProductDetail />} />
        <Route path="/Events/:eventsName" element= {<EventsDetail />} />
        </Routes>
      

        <ToastContainer />
        <NewFooter />
        {/* <Footer /> */}
      </div>
      <CookieConsent/>
      <ChatBotComponent />
      <ButtonGradient />
    </>
  );
};

export default App;
