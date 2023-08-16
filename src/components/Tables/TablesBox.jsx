import TablesCss from "./TablesBox.module.css";
import TextCss from "./TablesText.module.css";
import PictureTables from "./Tables.svg";
// import NoDisain from "./FuckUp1.svg";

function TablesBox() {
  return (
    <div className={TablesCss.TablesContainer}>
      <div className={TablesCss.HeadTextBox}>
        <div className={TablesCss.HeadText}>
          Экономьте до 60% — прямо с вашего телефона!
        </div>
        {/* <div className={TablesCss.HeadText}>Что вы получаете, выбирая нас</div> */}
      </div>
      <div className={TablesCss.ContentBox}>
        <LeftText />
        <div className={TablesCss.ImgBox}>
          {/* <img src="https://picsum.photos/seed/picsum/640/460" alt="" /> */}
          <img src={PictureTables} alt="" />
        </div>
        <RightText />
      </div>
    </div>
  );
}

function LeftText() {
  return (
    <div className={TablesCss.LeftTextBox}>
      <div className={TextCss.LeftTextUp}>
        {/* <p className={TextCss.HeadT}>Автоматизация</p>
        <p className={TextCss.BodyT}>обновлений ставкок без вашего участия</p> */}
        <p className={TextCss.HeadT}>Простота в Использовании</p>
        <p className={TextCss.BodyT}>
          Не нужно быть экспертом в рекламе, чтобы начать. Наш интерфейс прост и
          понятен
        </p>
      </div>
      <div className={TextCss.LeftTextDown}>
        {/* <p className={TextCss.HeadT}>Исключение</p>
        <p className={TextCss.BodyT}>
          самоконкуренции среди своих рекламных кампаний
        </p> */}

        <p className={TextCss.HeadT}>Автоматизированный Мониторинг</p>
        <p className={TextCss.BodyT}>
          Сервис непрерывно следит за рынком, адаптируя ставки для
          наилучшей доходности
        </p>
      </div>
    </div>
  );
}
function RightText() {
  return (
    <div className={TablesCss.RightTextBox}>
      <div className={TextCss.RightTextUp}>
        {/* <p className={TextCss.HeadT}>Оптимизация бюджета</p>
        <p className={TextCss.BodyT}>
          за счет реальных ставок которые в разы ниже ставок WB
        </p> */}
        <p className={TextCss.HeadT}>Умные Алгоритмы</p>
        <p className={TextCss.BodyT}>
          Используйте силу машинного обучения для оптимизации ваших рекламных
          кампаний.
        </p>
      </div>
      <div className={TextCss.RightTextDown}>
        <p className={TextCss.HeadT}>Безопасность и Конфиденциальность</p>
        <p className={TextCss.BodyT}>
          Ваши данные в безопасности с надежными протоколами шифрования
        </p>
      </div>
    </div>
  );
}

export default TablesBox;
