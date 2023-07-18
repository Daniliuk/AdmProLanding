import DescriptionCss from './DescriptionBox.module.css'

function DescriptionBox() {
    return (
        <div className={DescriptionCss.DescriptionContainer}>
            {/* <div className={DescriptionCss.Top}> */}
                <div className={DescriptionCss.TextBox}>
                    <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus facilis corrupti, ab ullam expedita illum quos numquam itaque, perferendis reprehenderit? Laboriosam voluptatum, assumenda saepe provident molestias repudiandae exercitationem, quod ut unde ad voluptas ducimus quae possimus aliquam, reprehenderit necessitatibus!
                    </h1>
                </div>
            {/* </div> */}
            {/* <div className={DescriptionCss.Bottom}> */}
                <div className={DescriptionCss.ImageBox}>
                    {/* Ddescription image */}
                </div>


                <div className={DescriptionCss.ButtonBox}>
                    <button className={DescriptionCss.DiscriptionButton}>Link on the bot</button>
                </div>
            {/* </div> */}

        </div>
    );
}
export default DescriptionBox;