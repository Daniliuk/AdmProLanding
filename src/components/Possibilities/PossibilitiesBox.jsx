import BasicTabs from "./PossibComonents/Tabs";
import PossibilitiesCss from "./PossibilitiesBox.module.css";

// -----------------

function PossibilitiesBox() {
  return (
    <div className={PossibilitiesCss.PossibilitiesContainer}>
      <div className={PossibilitiesCss.HeadBox}>
        <div className={PossibilitiesCss.HeadText}>
          Возможности, которые превратите ваш рекламный бюджет в инвестицию!
        </div>
      </div>

      <div className={PossibilitiesCss.SelectorBox}>
        <div className={PossibilitiesCss.SelectorWrapper}>
          <BasicTabs />
        </div>
      </div>
    </div>
  );
}

export default PossibilitiesBox;
