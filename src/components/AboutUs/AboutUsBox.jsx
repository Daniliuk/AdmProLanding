import AboutUsCss from './AboutUsBox.module.css'
import PicturAboutUs from './AboutAsCat.jpeg'

function AboutUsBox() {
  return (
      <div className={AboutUsCss.AboutUsContainer}>
          {/* <div className={AboutUsCss.Top}> */}
              <div className={AboutUsCss.TextBox}>
                <h4>
                  Профессиональная команда, работающая для вас каждый день.              
                </h4>
              </div>
          {/* </div> */}
          {/* <div className={AboutUsCss.Bottom}> */}
              <div className={AboutUsCss.ButtonBox}>
                <button className={AboutUsCss.AboutUsButton}>Link on Us</button>
              </div>
              <div className={AboutUsCss.ImageBox}>
                <img className={AboutUsCss.PicturAboutUs} src={PicturAboutUs} alt="" />
              </div>
          {/* </div> */}

      </div>
  );
}
export default AboutUsBox;