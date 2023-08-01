import TablesCss from './TablesBox.module.css'

function TablesBox() {
    return (
        <div className={TablesCss.TablesContainer}>
                <div className={TablesCss.LeftTextBox}>
                    TextL
                </div>

                <div className={TablesCss.ImgBox}>
                    img
                </div>

                <div className={TablesCss.RightTextBox}>
                    TextR
                </div>
        </div>

    );
}

export default TablesBox;