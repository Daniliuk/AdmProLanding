import SubsPageCss from "./SubsPage.module.css";
import winer from "./winer.svg";
import master from './master.svg';
import chempion from './champion.svg'

// максимальная ширина подписки 298px

function SubsPageBox() {
  return (
    <div className={SubsPageCss.SubsPageContainer}>
      <div className={SubsPageCss.Sub1}>
        {/* <img src="https://picsum.photos/380/600" alt="" /> */}
        <div className={SubsPageCss.SubPost}>
          <div className={SubsPageCss.DescriptSub}>
            <img src={winer} alt="" />
          </div>
          <div className={SubsPageCss.ButtonBox}>
            <button className={SubsPageCss.ButtonDesign}>Оформить</button>
          </div>
        </div>
      </div>
      <div className={SubsPageCss.Sub2}>
        {/* <img src="https://picsum.photos/380/600" alt="" /> */}
        <div className={SubsPageCss.SubPost}>
          <div className={SubsPageCss.DescriptSub}>
          <img src={master} alt="" />
          </div>
          <div className={SubsPageCss.ButtonBox}>
            <button className={SubsPageCss.ButtonDesign}>Оформить</button>
          </div>
        </div>
      </div>
      <div className={SubsPageCss.Sub3}>
        {/* <img src="https://picsum.photos/380/600" alt="" /> */}
        <div className={SubsPageCss.SubPost}>
          <div className={SubsPageCss.DescriptSub}>
          <img src={chempion} alt="" />
          </div>
          <div className={SubsPageCss.ButtonBox}>
            <button className={SubsPageCss.ButtonDesign}>Оформить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubsPageBox;
