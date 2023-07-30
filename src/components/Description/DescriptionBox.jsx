import DescriptionCss from "./DescriptionBox.module.css";
import PicturDescription from "./svgTesting.png";
import PicR from "./Frame 1.svg";

function DescriptionBox() {
  return (
    <div className={DescriptionCss.DescriptionContainer}>
      <div className={DescriptionCss.TextBox}>
        <h1>
          Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитики на
          Wildberries
        </h1>
      </div>
      <div className={DescriptionCss.ImageBox}>
        <img
          className={DescriptionCss.PicturDescription}
          src={PicturDescription}
          alt=""
        />
      </div>

      <div className={DescriptionCss.ButtonBox}>
        <a href="https://admp.pro/">
          <button className={DescriptionCss.DiscriptionButton}>
            Link on the bot
          </button>
        </a>
      </div>
      <div className={DescriptionCss.DescriptionRightContainer}>
        <div className={DescriptionCss.RightImgWrapper}>
          <img className={DescriptionCss.RightImg} src={PicR} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
