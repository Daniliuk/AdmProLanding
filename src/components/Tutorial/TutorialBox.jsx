import TutorialCss from './TutorialBox.module.css'
import PicturTutorial from './svgTesting.png'


function TutorialBox() {
    return (
        <div className={TutorialCss.TutorialContainer}>
            {/* <div className={TutorialCss.Top}> */}
                <div className={TutorialCss.ImageBox}>
                    <img className={TutorialCss.PicturTutorial} src={PicturTutorial} alt="" />
                </div>
            {/* </div> */}
            {/* <div className={TutorialCss.Bottom}> */}
                <div className={TutorialCss.TextBox}>
                    <h2>
                    Простой и понятный интерфейс, созданный для вашего удобства.                   
                    </h2>
                </div>
                <div className={TutorialCss.ButtonBox}>
                    <button className={TutorialCss.TutorialButton}>Link on the Tutorials</button>
                </div>
            {/* </div> */}
        </div>

    );
}

export default TutorialBox;