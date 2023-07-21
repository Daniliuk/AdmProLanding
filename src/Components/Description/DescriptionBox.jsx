import DescriptionCss from "./DescriptionBox.module.css";
import Image1 from "./svgTesting.png"

function DescriptionBox() {
  return (
    <div className={DescriptionCss.DescriptionContainer}>
      <div className={DescriptionCss.TextBox}>
        <div className={DescriptionCss.TextEdit}>
          <h1 className={DescriptionCss.DescriptionText}>
            Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитикой
            на wildberries
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus facilis corrupti, ab ullam expedita illum quos numquam itaque, perferendis reprehenderit? Laboriosam voluptatum, assumenda saepe provident molestias repudiandae exercitationem, quod ut unde ad voluptas ducimus quae possimus aliquam, reprehenderit necessitatibus! */}
          </h1>
        </div>
      </div>
      <div className={DescriptionCss.ImageBox}>
        <div className={DescriptionCss.DescriptionImg}></div>
        {/* <img src={Image1} alt="" className={DescriptionCss.DescriptionImg}/> */}
        </div>
      <div className={DescriptionCss.ButtonBox}>
        <button className={DescriptionCss.DiscriptionButton}>
          Link on the bot
        </button>
      </div>
    </div>
  );
}
export default DescriptionBox;
