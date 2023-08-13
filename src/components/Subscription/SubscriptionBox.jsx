import SubscriptionCss from "./SubscriptionBox.module.css";
import winer from "./winer1.svg";
import master from './Master1.svg';
import chempion from './Champion1.svg'

function SubscriptionBox() {
  return (
    <div className={SubscriptionCss.SubsPageContainer}>
      <div className={SubscriptionCss.Sub1}>
        <div className={SubscriptionCss.SubPost}>
          <div className={SubscriptionCss.DescriptSub}>
            <img src={winer} alt="" />
          </div>
          <div className={SubscriptionCss.ButtonBox}>
            <a href="https://admp.pro/">
              <button className={SubscriptionCss.ButtonDesign}>Оформить</button>
            </a>
          </div>
        </div>
      </div>
      <div className={SubscriptionCss.Sub2}>
        <div className={SubscriptionCss.SubPost}>
          <div className={SubscriptionCss.DescriptSub}>
          <img src={master} alt="" />
          </div>
          <div className={SubscriptionCss.ButtonBox}>
          <a href="https://admp.pro/">
              <button className={SubscriptionCss.ButtonDesign}>Оформить</button>
            </a>          
          </div>
        </div>
      </div>
      <div className={SubscriptionCss.Sub3}>
        <div className={SubscriptionCss.SubPost}>
          <div className={SubscriptionCss.DescriptSub}>
          <img src={chempion} alt="" />
          </div>
          <div className={SubscriptionCss.ButtonBox}>
          <a href="https://admp.pro/">
              <button className={SubscriptionCss.ButtonDesign}>Оформить</button>
            </a>         
             </div>
        </div>
      </div>
    </div>
  );
}
export default SubscriptionBox;
