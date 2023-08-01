import PossibilitiesCss from './PossibilitiesBox.module.css'

function PossibilitiesBox() {
    return (
        <div className={PossibilitiesCss.PossibilitiesContainer}>
                <div className={PossibilitiesCss.Сaption}>
                    возможности
                </div>

                <div className={PossibilitiesCss.TabsList}>
                    слайдер
                </div>

                <div className={PossibilitiesCss.TextBox}>
                    Text
                </div>
                <div className={PossibilitiesCss.ImgBox}>
                    img
                </div>
        </div>

    );
}

export default PossibilitiesBox;