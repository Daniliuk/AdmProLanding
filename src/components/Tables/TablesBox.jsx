import TablesCss from "./TablesBox.module.css";
import TextCss from "./TablesText.module.css";

function TablesBox() {
  return (
    <div className={TablesCss.TablesContainer}>
      <div className={TablesCss.HeadTextBox}>
        {/* <div className={TablesCss.HeadText}></div> */}
        <div className={TablesCss.HeadText}>Вот почему у нас выгодно</div>
      </div>
      <div className={TablesCss.ContentBox}>
        <LeftText />
        <div className={TablesCss.ImgBox}>
          <img src="https://picsum.photos/seed/picsum/640/460" alt="" />
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
        <p className={TextCss.HeadT}>Автоматически</p>
        <p className={TextCss.BodyT}>обновляет ставки без вашего участия</p>
      </div>
      <div className={TextCss.LeftTextMid}>
        <p className={TextCss.HeadT}>Телега</p>
        <p className={TextCss.BodyT}>про безопасность</p>
      </div>
      <div className={TextCss.LeftTextDown}>
        <p className={TextCss.HeadT}>Исключает</p>
        <p className={TextCss.BodyT}>
          самоконкуренцию среди своих рекламных кампаний
        </p>
      </div>
    </div>
  );
}
function RightText() {
  return (
    <div className={TablesCss.RightTextBox}>
      <div className={TextCss.RightTextUp}>
        <p className={TextCss.HeadT}>Оптимизирует бюджет</p>
        <p className={TextCss.BodyT}>
          за счет реальных ставок которые в разы ниже ставок WB
        </p>
      </div>
      <div className={TextCss.RightTextMid}>
        <p className={TextCss.HeadT}>Телега</p>
        <p className={TextCss.BodyT}>про выгоду по сравнению с ВБ</p>
      </div>
      <div className={TextCss.RightTextDown}>
        <p className={TextCss.HeadT}>Защищает</p>
        <p className={TextCss.BodyT}>
          данные кабинета от утечки с помощью шифрования
        </p>
      </div>
    </div>
  );
}

export default TablesBox;
