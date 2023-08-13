import "./App.css";
import HeaderBox from "./components/Header/HeaderBox.jsx";
// import DescriptionBox from "./MainPage/Description/DescriptionBox.jsx";
// import TutorialBox from "./MainPage/Tutorial/TutorialBox.jsx";
// import SubscriptionBox from "./MainPage/Subscription/SubscriptionBox.jsx";
// import AboutUsBox from "./MainPage/AboutUs/AboutUsBox.jsx";
// import FooterBox from "./MainPage/Footer/FooterBox.jsx";
import TestingBox from "./components/Testing/TestingBox";
import LayoutPage from "./Layout/Layout.jsx";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="MainApp">
      <HeaderBox />
      <Routes>
          <Route path="/" element={<LayoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
