import FooterBoxCss from "./FooterBox.module.css";

function FooterBox() {
  return (
    <div className={FooterBoxCss.FooterContainer}>
      <div className={FooterBoxCss.ConclusionContainer}>
        <div className={FooterBoxCss.TextBox}>
          <div className={FooterBoxCss.Text}>
            Представляем наш инновационный сервис, который предлагает умное
            управление рекламными ставками для продавцов на Wildberries. Не
            теряйте времени на сложные расчеты и мониторинг. Позвольте нашей
            системе сделать всю работу за вас!
          </div>
        </div>
        <div className={FooterBoxCss.ButtonBox}>
          <a href="https://admp.pro/">
            <button className={FooterBoxCss.ConclusionButton}>
              Начните сегодня и воспользуйтесь нашим бесплатным пробным
              периодом!
            </button>
          </a>
        </div>
      </div>

      <div className={FooterBoxCss.ReportContainer}>
        <div className={FooterBoxCss.AboutCompanyBox}>
          Друзья, мы рады представить вам инструмент, который меняет правила
          игры для продавцов на Wildberries. Наш сервис не только упрощает
          управление рекламными ставками, но и позволяет вам делать это на ходу,
          сохраняя значительную часть бюджета.
        </div>
        <div className={FooterBoxCss.ContactsBox}>
          Есть вопросы? Напишите нам в Direct или по электронной почте
          support@yourdomain.com.
        </div>
        <div className={FooterBoxCss.ReportBox}>
          <a href="https://vk.com/id133890390">
            Тех-поддерка! Писать Максиму!!!
          </a>
        </div>
      </div>
    </div>
  );
}
export default FooterBox;
