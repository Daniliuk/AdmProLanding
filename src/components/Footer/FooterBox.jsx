import FooterBoxCss from "./FooterBox.module.css";

function FooterBox() {
  return (
    <div className={FooterBoxCss.FooterContainer}>
      <div className={FooterBoxCss.ConclusionContainer}>
        <div className={FooterBoxCss.ButtonBox}>
          <a href="https://admp.pro/">
            <button className={FooterBoxCss.ConclusionButton}>
              Опробовать бесплатную версию
            </button>
          </a>
        </div>
      </div>
      <div className={FooterBoxCss.ReportContainer}>
        <a href="https://vk.com/id133890390">
          по всем вопросам писать Максиму!!!
        </a>
      </div>
    </div>
  );
}
export default FooterBox;
