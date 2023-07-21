import SubscriptionCss from './SubscriptionBox.module.css'
import Image1 from "./svgTesting.png"
import Image2 from "./SubscriptionCat.avif"

function SubscriptionBox() {
    return (
        <div className={SubscriptionCss.SubscriptionContainer}>
            {/* <div className={SubscriptionCss.Top}> */}
                <div className={SubscriptionCss.TextBox}>
                    <h3>
                        Оформите подписку, чтобы получить все примущества Adm.Pro
                        Каждый найдет для себя то, что подходит именно ему!
                    {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat in laborum eaque laudantium voluptates est eos unde similique doloremque quo, delectus, mollitia enim eveniet adipisci dolore illo animi. Ipsum illum culpa laudantium earum veritatis autem unde, cumque atque architecto aliquid reiciendis delectus dolorum sed iure est. Iusto eos quos architecto possimus quas vel. Molestiae eaque fugiat saepe a facilis voluptates. */}
                    </h3>
                </div>
            {/* </div> */}
            {/* <div className={SubscriptionCss.Bottom}> */}
                <div className={SubscriptionCss.ImageBox}>
                    {/* <div className={SubscriptionCss.SubscriptionImg}></div> */}
                    <img src={Image2} alt="" className={SubscriptionCss.SubscriptionImg}/>
                </div>

                <div className={SubscriptionCss.ButtonBox}>
                    <button>Link to subscription</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default SubscriptionBox;