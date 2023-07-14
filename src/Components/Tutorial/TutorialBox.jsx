import TutorialCss from './TutorialBox.module.css'

function TutorialBox() {
    return (
        <div className={TutorialCss.TutorialContainer}>
            <div className={TutorialCss.Top}>
                <div className={TutorialCss.ImageBox}>
                    Tutorial image
                </div>
            </div>
            <div className={TutorialCss.Bottom}>
                <div className={TutorialCss.TextBox}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium modi unde ab earum. Dolor, voluptas? Libero quod numquam adipisci dignissimos error beatae obcaecati id soluta minus! Unde amet vero iusto architecto voluptatibus, possimus enim dignissimos, delectus, exercitationem animi laborum.
                </div>
                <div className={TutorialCss.ButtonBox}>
                    <button>Link to the tutorials</button>
                </div>
            </div>
        </div>

    );
}

export default TutorialBox;