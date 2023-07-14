import SubscriptionCss from './SubscriptionBox.module.css'

function SubscriptionBox() {
    return (
        <div className={SubscriptionCss.SubscriptionContainer}>
            <div className={SubscriptionCss.Top}>
                <div className={SubscriptionCss.TextBox}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente consequatur commodi aut tempore eius consequuntur soluta, voluptatem autem ipsum molestiae ducimus perspiciatis saepe. Unde perspiciatis accusantium ducimus id officia.
                </div>
            </div>
            <div className={SubscriptionCss.Bottom}>
                <div className={SubscriptionCss.ImageBox}>
                Subscription image
                </div>

                <div className={SubscriptionCss.ButtonBox}>
                    <button>Link to subscription</button>
                </div>
            </div>

        </div>
    );
}
export default SubscriptionBox;