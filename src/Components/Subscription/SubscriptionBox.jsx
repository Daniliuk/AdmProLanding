import SubscriptionCss from './SubscriptionBox.module.css'
import Pictur3 from './SubscriptionCat.avif'


function SubscriptionBox() {
    return (
        <div className={SubscriptionCss.SubscriptionContainer}>
            {/* <div className={SubscriptionCss.Top}> */}
                <div className={SubscriptionCss.TextBox}>
                    <h3>
                    Оформите подписку, чтобы получить все примущества Adm.Pro. Каждый найдет для себя то, что подходит именно ему!                    </h3>
                </div>
            {/* </div> */}
            {/* <div className={SubscriptionCss.Bottom}> */}
                <div className={SubscriptionCss.ImageBox}>
                    <img className={SubscriptionCss.Pictur3} src={Pictur3} alt="" />
                </div>

                <div className={SubscriptionCss.ButtonBox}>
                <button className={SubscriptionCss.SubscriptionButton}>Link on the Subscriptions</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default SubscriptionBox;