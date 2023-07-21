import './App.css';
import HeaderBox from './Components/Header/HeaderBox.jsx';
import DescriptionBox from './Components/Description/DescriptionBox.jsx';
import TutorialBox from './Components/Tutorial/TutorialBox.jsx';
import SubscriptionBox from './Components/Subscription/SubscriptionBox.jsx';
import AboutUsBox from './Components/AboutUs/AboutUsBox.jsx';

function App() {
  return (
    <div className = "MainAppContainer"> 
      <HeaderBox/>
      {/* <DescriptionBox/> */}
      {/* <TutorialBox/> */}
      <SubscriptionBox/>
      {/* <AboutUsBox/> */}
    </div>
  );
}

export default App;
