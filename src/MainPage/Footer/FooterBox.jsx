import FooterBoxCss from "./FooterBox.module.css";

function FooterBox() {
  return (
    <div className={FooterBoxCss.FooterContainer}>
        <div className={FooterBoxCss.ReportContainer}>
            <a href="https://vk.com/id133890390">по всем вопросам писать Максиму!!!</a>
        </div>
    </div>
  );
}
export default FooterBox;