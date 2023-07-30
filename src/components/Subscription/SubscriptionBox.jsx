import SubscriptionCss from "./SubscriptionBox.module.css";
import PicturSubscription from "./svgTesting.png";
import { Link } from "react-router-dom";

function SubscriptionBox() {
  return (
    <div className={SubscriptionCss.SubscriptionContainer}>
      <div className={SubscriptionCss.TextBox}>
        <h3>
          Оформите подписку, чтобы получить все примущества Adm.Pro. Каждый
          найдет для себя то, что подходит именно ему!{" "}
        </h3>
      </div>
      <div className={SubscriptionCss.ImageBox}>
        <img
          className={SubscriptionCss.PicturSubscription}
          src={PicturSubscription}
          alt=""
        />
      </div>

      <div className={SubscriptionCss.ButtonBox}>
        <Link to="SubsPage">
          <button className={SubscriptionCss.SubscriptionButton}>
            Link on the Subscriptions
          </button>
        </Link>
      </div>

      {/* <div className={SubscriptionCss.LImageBox}>
        <img
          className={SubscriptionCss.PicturSubscription}
          src={PicturSubscription}
          alt=""
        />
      </div> */}

      <div className={SubscriptionCss.LeftBox}>
        <div className={SubscriptionCss.LeftImgWrapper}>
          <img className={SubscriptionCss.LeftImg} src="https://picsum.photos/400/700" alt="" />
        </div>
      </div>
    </div>
  );
}
export default SubscriptionBox;
