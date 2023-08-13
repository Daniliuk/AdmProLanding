import FooterBoxCss from "./FooterBox.module.css";

function FooterBox() {
  return (
    <div className={FooterBoxCss.FooterContainer}>
      <div className={FooterBoxCss.ConclusionContainer}>
        <div className={FooterBoxCss.TextBox}>
          <div className={FooterBoxCss.Text}>
            Подключайте свои кампании к управлению сервисом Admp.pro.
            Присоединяйтесь к 30 000+ пользователей, которые управляют рекламой
            ЭФФЕКТИВНО!
          </div>
        </div>
        <div className={FooterBoxCss.ButtonBox}>
          <a href="https://admp.pro/">
            <button className={FooterBoxCss.ConclusionButton}>
              Опробовать бесплатную версию
            </button>
          </a>
        </div>
      </div>

      <div className={FooterBoxCss.ReportContainer}>
        <div className={FooterBoxCss.AboutCompanyBox}>
          Admp.pro krutaaa! 
        </div>
        <div className={FooterBoxCss.ContactsBox}>
          contacts:
            88005553535
        </div>
        <div className={FooterBoxCss.ReportBox}>
        <a href="https://vk.com/id133890390">
          по всем вопросам писать Максиму!!!
        </a>
        </div>
      </div>
    </div>
  );
}
export default FooterBox;
