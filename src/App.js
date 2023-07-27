import "./App.css";
import HeaderBox from "./MainPage/Header/HeaderBox.jsx";
import DescriptionBox from "./MainPage/Description/DescriptionBox.jsx";
import TutorialBox from "./MainPage/Tutorial/TutorialBox.jsx";
import SubscriptionBox from "./MainPage/Subscription/SubscriptionBox.jsx";
import AboutUsBox from "./MainPage/AboutUs/AboutUsBox.jsx";
import FooterBox from "./MainPage/Footer/FooterBox.jsx";
import TestingBox from "./MainPage/Testing/TestingBox";
import SubsPageBox from "./MainPage/SubscriptionsPage/SubsPage.jsx";
import LayoutPage from "./MainPage/Layout/Layout";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Router,
} from "react-router-dom";

function App() {
  return (
    <div className="MainAppContainer">
    <HeaderBox />
    <DescriptionBox />
    <TutorialBox />
    <SubscriptionBox />
    <AboutUsBox />
    <FooterBox /> 
    {/* <SubsPageBox/>*/}
  </div>
  );
}

export default App;
