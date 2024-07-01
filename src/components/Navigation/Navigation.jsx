import style from "./Navigation.module.css";
import { MdOutlineExplore } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navbar}>
        <MdOutlineExplore style={{ fontSize: "25px" }} alt="Icone Bússula" />
        <ul className={style.list1}>
          <li className={style.all}>All</li>
          <li className={style.toyou}>New to you</li>
        </ul>
        
        <ul className={style.list2}>
          <li>UX Design</li>
          <li>Figma</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
