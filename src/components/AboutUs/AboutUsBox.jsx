import AboutUsCss from "./AboutUsBox.module.css";
import PicturAboutUs from "./AboutAsCat.jpeg";

function AboutUsBox() {
  return (
    <div className={AboutUsCss.AboutUsContainer}>
      <div className={AboutUsCss.ButtonBox}>
        <button className={AboutUsCss.AboutUsButton}>Link on Us</button>
      </div>

      <div className={AboutUsCss.ContentBox}>
        <div className={AboutUsCss.ImageBox}>
          <img src="https://picsum.photos/1000/300" alt="" />
        </div>

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
