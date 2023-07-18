import TutorialCss from './TutorialBox.module.css'

function TutorialBox() {
    return (
        <div className={TutorialCss.TutorialContainer}>
            {/* <div className={TutorialCss.Top}> */}
                <div className={TutorialCss.ImageBox}>
                    Tutorial image
                </div>
            {/* </div> */}
            {/* <div className={TutorialCss.Bottom}> */}
                <div className={TutorialCss.TextBox}>
                    <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis ex ipsum! Quod minus quidem et ducimus odit sed, pariatur quis optio odio rem quam commodi, consequatur repudiandae repellat, dolor soluta sunt nihil? Nobis quibusdam animi eaque. Necessitatibus, nam nulla est ab eos id provident nisi unde, quas inventore, fugit illum exercitationem repellat qui fugiat mollitia magni debitis cumque. Possimus.
                    </h2>
                </div>
                <div className={TutorialCss.ButtonBox}>
                    <button>Link to the tutorials</button>
                </div>
            {/* </div> */}
        </div>

    );
}

export default TutorialBox;