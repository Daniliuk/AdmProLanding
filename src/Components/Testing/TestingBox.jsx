import TestingBoxCss from './TestingBox.module.css'
import Pictur1 from './svgTesting.png'
import Pictur2 from './DescriptionCat.jpeg'

function TestingBox() {
    return (
        <div className={TestingBoxCss.TestingContainer}>
            {/* <div className={TestingBoxCss.Top}> */}
                <div className={TestingBoxCss.TextBox}>
                    <h1>
                    Adm.Pro - Лучший телеграмм-бот для управления рекламой и аналитики на Wildberries
                    </h1>
                </div>
            {/* </div> */}
            {/* <div className={DescriptionCss.Bottom}> */}
                <div className={TestingBoxCss.ImageBox}>
                    <img className={TestingBoxCss.Pictur1} src={Pictur1} alt="" />
                    {/* Ddescription image */}
                </div>


                <div className={TestingBoxCss.ButtonBox}>
                    <button className={TestingBoxCss.TestingButton}>Testing</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default TestingBox;