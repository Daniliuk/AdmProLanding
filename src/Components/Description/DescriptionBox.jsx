import DescriptionCss from './DescriptionBox.module.css'
import Pictur1 from './svgTesting.png'

function DescriptionBox() {
    return (
        <div className={DescriptionCss.DescriptionContainer}>
            {/* <div className={DescriptionCss.Top}> */}
                <div className={DescriptionCss.TextBox}>
                    <h1>
                    Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитики на Wildberries
                    </h1>
                </div>
            {/* </div> */}
            {/* <div className={DescriptionCss.Bottom}> */}
                <div className={DescriptionCss.ImageBox}>
                    <img className={DescriptionCss.Pictur1} src={Pictur1} alt="" />
                </div>

                <div className={DescriptionCss.ButtonBox}>
                    <button className={DescriptionCss.DiscriptionButton}>Link on the bot</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default DescriptionBox;