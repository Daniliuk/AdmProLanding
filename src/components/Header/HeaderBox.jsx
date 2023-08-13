import HeaderCss from './HeaderBox.module.css'
import DropMenu from './DropMenu.svg'
import {Link} from "react-router-dom";
// import Logo from './BetaLogo.jpg'
import MenuIcon from '@mui/icons-material/Menu'


function HeaderBox() {
    return (
        <div className={HeaderCss.HeaderContainer}>
            <div className={HeaderCss.LogoBox}>
                <Link to="/">
                <div className={HeaderCss.LogoForm}>
                </div>
                </Link>
            </div>
            <div className={HeaderCss.CentrlBox}>
                <div>
                    {/* <Link to="SubsPage">Subs</Link> */}
                </div>
            </div>
            <div className={HeaderCss.MenuBox}>
                <div className={HeaderCss.MenuForm}>
                    {/* <MenuIcon/> */}
                    <img src={DropMenu} alt="" />
                </div>
            </div>

        </div>
    );
}
export default HeaderBox;