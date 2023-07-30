
import DescriptionBox from "../components/Description/DescriptionBox.jsx";
import TutorialBox from "../components/Tutorial/TutorialBox.jsx";
import SubscriptionBox from "../components/Subscription/SubscriptionBox.jsx";
import AboutUsBox from "../components/AboutUs/AboutUsBox.jsx";
import FooterBox from "../components/Footer/FooterBox.jsx";
import LayoutPageCss from './Layout.module.css' 
import TestingBox from "../components/Testing/TestingBox.jsx";

function LayoutPage() {
  return(
  <div className={LayoutPageCss.MainAppContainer}>
    {/* <TestingBox/> */}
    <DescriptionBox />
    <TutorialBox />
    <SubscriptionBox />
    <AboutUsBox /> 
    <FooterBox />
  </div>
  );
}
export default LayoutPage;
