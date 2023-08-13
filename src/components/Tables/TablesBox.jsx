import TablesCss from "./TablesBox.module.css";
import TextCss from "./TablesText.module.css";
import PictureTables from './TablesHorizontalImg2.svg'
import NoDisain from './FuckUp1.svg'

function TablesBox() {
  return (
    <div className={TablesCss.TablesContainer}>
      <div className={TablesCss.HeadTextBox}>
        {/* <div className={TablesCss.HeadText}>Вот почему у нас выгодно</div> */}
        <div className={TablesCss.HeadText}>Что вы получаете, выбирая нас</div>

      </div>
      <div className={TablesCss.ContentBox}>
        <LeftText />
        <div className={TablesCss.ImgBox}>
          {/* <img src="https://picsum.photos/seed/picsum/640/460" alt="" /> */}
          <img src={NoDisain} alt="" />
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
        <p className={TextCss.HeadT}>Автоматизация</p>
        <p className={TextCss.BodyT}>обновлений ставкок без вашего участия</p>
      </div>
      <div className={TextCss.LeftTextDown}>
        <p className={TextCss.HeadT}>Исключение</p>
        <p className={TextCss.BodyT}>
          самоконкуренции среди своих рекламных кампаний
        </p>
      </div>
    </div>
  );
}
function RightText() {
  return (
    <div className={TablesCss.RightTextBox}>
      <div className={TextCss.RightTextUp}>
        <p className={TextCss.HeadT}>Оптимизация бюджета</p>
        <p className={TextCss.BodyT}>
          за счет реальных ставок которые в разы ниже ставок WB
        </p>
      </div>
      <div className={TextCss.RightTextDown}>
        <p className={TextCss.HeadT}>Защита</p>
        <p className={TextCss.BodyT}>
          личных данных от утечки с помощью шифрования
        </p>
      </div>
    </div>
  );
}

export default TablesBox;
