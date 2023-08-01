import DescriptionCss from "./DescriptionBox.module.css";
import PicturDescription from "./svgTesting.png";
import PicR from "./Frame 1.svg";

function DescriptionBox() {
  return (
    <div className={DescriptionCss.DescriptionContainer}>
      <div className={DescriptionCss.ImageBox}>
        <img
          className={DescriptionCss.PicturDescription}
          src={PicturDescription}
          alt=""
        />
      </div>

      <div className={DescriptionCss.TextBox}>
        <h1>
          Adm.Pro - телеграмм-бот для управления рекламой и аналитики на Wildberries
        </h1>
      </div>

      <div className={DescriptionCss.ButtonBox}>
        <a href="https://admp.pro/">
          <button className={DescriptionCss.DiscriptionButton}>
            Опробовать бесплатную версию
          </button>
        </a>
      </div>

      <div className={DescriptionCss.SubTextBox}>
        <div className={DescriptionCss.SubText}>
          3 месяца бесплатно
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
