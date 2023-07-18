import HeaderCss from './HeaderBox.module.css'
// import Logo from './BetaLogo.jpg'


function HeaderBox() {
    return (
        <div className={HeaderCss.HeaderContainer}>
            <div className={HeaderCss.LogoBox}>
                <div className={HeaderCss.LogoForm}>
                    {/* <img src={Logo} alt="Logo" className={HeaderCss.LogoImg}/> */}
                </div>
                    Admp.Pro
            </div>
            <div className={HeaderCss.CentrlBox}>
                <div>
                professional marketplace advisor
                </div>
            </div>
            <div className={HeaderCss.MenuBox}>
                <div className={HeaderCss.MenuForm}></div>
                MenuBox
            </div>

        </div>
    );
}
export default HeaderBox;