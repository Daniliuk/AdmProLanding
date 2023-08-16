import AboutUsCss from "./AboutUsBox.module.css";
import PicturAboutUs from "./AboutAsCat.jpeg";
import NoDisain from './FuckUp.svg'
import WorkerCard from './Cards.jsx'

function AboutUsBox() {
  return (
    <div className={AboutUsCss.AboutUsContainer}>
        <WorkerCardsBox/>
        <div className={AboutUsCss.TextBox}>
          <div className={AboutUsCss.HedText}>
            Профессиональная команда, работающая для вас каждый день.
          </div>
        </div>       
    </div>
  );
}
export default AboutUsBox;

function WorkerCardsBox(){
  return(
    <div className={AboutUsCss.WorkerCardsContainer}>
      <WorkerCard/>
      <WorkerCard/>
      <WorkerCard/>
      <WorkerCard/>
    </div>
  );
}



