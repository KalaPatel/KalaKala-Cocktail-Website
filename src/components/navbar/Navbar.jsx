import style from "./index.module.scss";
import { CgMenuHotdog } from "react-icons/cg";
import logo from "../../img/bartender.png";

const Navbar = ({ setMenuOpen }) => {
  const onClickMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className={style.Navbar}>
      <div className={style.name_logoContainer}>
        <img className={style.logo_img} src={logo} alt="logo" />
        <h4>KalaKala</h4>
      </div>
      <CgMenuHotdog className={style.hamburgerIcon} onClick={onClickMenuOpen} />
    </div>
  );
};

export default Navbar;
