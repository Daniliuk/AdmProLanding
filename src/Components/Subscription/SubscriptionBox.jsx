import SubscriptionCss from './SubscriptionBox.module.css'


function SubscriptionBox() {
    return (
        <div className={SubscriptionCss.SubscriptionContainer}>
            {/* <div className={SubscriptionCss.Top}> */}
                <div className={SubscriptionCss.TextBox}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat in laborum eaque laudantium voluptates est eos unde similique doloremque quo, delectus, mollitia enim eveniet adipisci dolore illo animi. Ipsum illum culpa laudantium earum veritatis autem unde, cumque atque architecto aliquid reiciendis delectus dolorum sed iure est. Iusto eos quos architecto possimus quas vel. Molestiae eaque fugiat saepe a facilis voluptates.
                </div>
            {/* </div> */}
            {/* <div className={SubscriptionCss.Bottom}> */}
                <div className={SubscriptionCss.ImageBox}>
                Subscription image
                </div>

                <div className={SubscriptionCss.ButtonBox}>
                    <button>Link to subscription</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default SubscriptionBox;