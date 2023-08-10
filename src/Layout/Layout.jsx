import DescriptionBox from "../components/Description/DescriptionBox.jsx";
import TablesBox from "../components/Tables/TablesBox.jsx";
import PossibilitiesBox from "../components/Possibilities/PossibilitiesBox.jsx";
import TutorialBox from "../components/Tutorial/TutorialBox.jsx";
import SubscriptionBox from "../components/Subscription/SubscriptionBox.jsx";
import AboutUsBox from "../components/AboutUs/AboutUsBox.jsx";
import FooterBox from "../components/Footer/FooterBox.jsx";
import LayoutPageCss from "./Layout.module.css";
import TestingBox from "../components/Testing/TestingBox.jsx";
import SubsPageBox from "../pages/SubscriptionsPage/SubsPage.jsx";
import { Route, Link, Routes } from "react-router-dom";


function LayoutPage() {
  return (
    <div className={LayoutPageCss.MainAppContainer}>
      {/* <TestingBox/> */}
      <DescriptionBox />
      <TablesBox />
      <PossibilitiesBox/>
      {/* <TutorialBox /> */}
      <SubsPageBox />
      {/* <SubscriptionBox /> */}
      <AboutUsBox />
      <FooterBox />
    </div>
  );
}
export default LayoutPage;
