import AboutUsCss from "./AboutUsBox.module.css";
import PicturAboutUs from "./AboutAsCat.jpeg";
import NoDisain from './FuckUp.svg'

function AboutUsBox() {
  return (
    <div className={AboutUsCss.AboutUsContainer}>
      <div className={AboutUsCss.ButtonBox}>
        {/* <button className={AboutUsCss.AboutUsButton}>Link on Us</button> */}
      </div>

      <div className={AboutUsCss.ContentBox}>
        <WorkerCardsBox/>
        {/* <div className={AboutUsCss.ImageBox}>
          <img src="https://picsum.photos/1000/300" alt="" /> 
          <img src={NoDisain} alt="" />
        </div> */}

        <div className={AboutUsCss.TextBox}>
          <div className={AboutUsCss.HedText}>
            Профессиональная команда, работающая для вас каждый день.
          </div>
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

function WorkerCard(){
  return(
    <div className={AboutUsCss.CardContainer}>
        <div className={AboutUsCss.PhotoBox}>
          <img src="" alt="" /> {/*Photo150x150 (200x200)*/}
        </div>
        <div className={AboutUsCss.CaptionBox}>
          <div className={AboutUsCss.Name}>
            Vasiatka
          </div>
          <div className={AboutUsCss.Lable}>
            Popa
          </div>

        </div>
    </div>
  );
}

