import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Choose from "./pages/Choose";
import FillTheFormInnovator from "./pages/FillTheFormInnovator";
import IdeaPageInnovator from "./pages/IdeaPageInnovator";
import MacBookAir1 from "./pages/MacBookAir1";
import MainDashboard from "./pages/MainDashboard";
import LandingPage from "./pages/LandingPage";
import FillTheFormIndustrialExper from "./pages/FillTheFormIndustrialExper";
import LoginPage from "./pages/LoginPage";
import InboxDetailed from "./pages/InboxDetailed";
import MacBookAir from "./pages/MacBookAir";
import MacBookAir3 from "./pages/MacBookAir3";
import HomeDetailed from "./pages/HomeDetailed";
import MacBookAir4 from "./pages/MacBookAir4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/fill-the-forminnovator":
        title = "";
        metaDescription = "";
        break;
      case "/idea-page-innovator":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-2":
        title = "";
        metaDescription = "";
        break;
      case "/main-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/choose":
        title = "";
        metaDescription = "";
        break;
      case "/fill-the-formindustrial-expert":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/inbox-detailed-1":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-3":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-4":
        title = "";
        metaDescription = "";
        break;
      case "/home-detailed-1":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-air-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/choose" element={<Choose />} />
      <Route path="/fill-the-forminnovator" element={<FillTheFormInnovator />} />
      <Route path="/idea-page-innovator" element={<IdeaPageInnovator />} />
      <Route path="/macbook-air-2" element={<MacBookAir1 />} />
      <Route path="/main-dashboard" element={<MainDashboard />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/fill-the-formindustrial-expert" element={<FillTheFormIndustrialExper />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/inbox-detailed-1" element={<InboxDetailed />} />
      <Route path="/macbook-air-3" element={<MacBookAir />} />
      <Route path="/macbook-air-4" element={<MacBookAir3 />} />
      <Route path="/macbook-air-1" element={<MacBookAir4 />} />
      <Route path="/home-detailed-1" element={<HomeDetailed />} />
    </Routes>
  );
}
export default App;
