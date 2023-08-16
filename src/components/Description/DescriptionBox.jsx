import DescriptionCss from "./DescriptionBox.module.css";
import PicturDescription from "./svgTesting.png";
// import DescImg from './DescriptonImgDesck3.svg'
import DescImg from './DescPhon4.svg'
import PicR from "./Frame 1.svg";

function DescriptionBox() {
  return (
    <div className={DescriptionCss.DescriptionContainer}>
      <div className={DescriptionCss.ImageBox}>
        <img
          className={DescriptionCss.PicturDescription}
          // src={PicturDescription}
          src={DescImg}
          alt=""
        />
      </div>

      <div className={DescriptionCss.ContentBox}>
        <div className={DescriptionCss.TextBox}>
          <div className={DescriptionCss.HeadText}>
            Admp.Pro - телеграмм-бот для управления рекламой и аналитики на
            Wildberries
          </div>
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
          Повысьте эффективность своей рекламы бесплатно, в течении двух недель!
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
