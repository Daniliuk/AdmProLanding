import TestingBoxCss from "./TestingBox.module.css";
import Pictur1 from "./svgTesting.png";
import Pictur2 from "./DescriptionCat.jpeg";

function TestingBox() {
  return (
    <div className={TestingBoxCss.TestingContainer}>
      {/* <div className={TestingBoxCss.TextBox}>
                    <h1>
                    Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитики на Wildberries
                    </h1>
                </div>
                <div className={TestingBoxCss.ImageBox}>
                    <img className={TestingBoxCss.Pictur1} src={Pictur1} alt="" />
                </div>
                <div className={TestingBoxCss.ButtonBox}>
                    <button className={TestingBoxCss.TestingButton}>Testing</button>
                </div> */}
      <div className={TestingBoxCss.TextBox}>
        <h1>
          Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитики на
          Wildberries
        </h1>
      </div>

      <div className={TestingBoxCss.LImageBox}>
        <img className={TestingBoxCss.Pictur1} src={Pictur1} alt="" />
      </div>

      <div className={TestingBoxCss.ButtonBox}>
        <button className={TestingBoxCss.TestingButton}>Testing</button>
      </div>

      <div className={TestingBoxCss.RImageBox}>
        <img className={TestingBoxCss.Pictur1} src={Pictur1} alt="" />
      </div>
      
    </div>
  );
}
export default TestingBox;
