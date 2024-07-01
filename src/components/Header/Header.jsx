import style from "./Header.module.css";
import logo from "../../imagens/youtube-logo.png";
import cast from "../../imagens/avatar-icon.png";
import { FaChromecast } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headertop}>
        <div>
          <img className={style.youtube_logo} src={logo} alt="Logo Youtube" />
        </div>

        <div className={style.navbar_icons}>
          <button>
            <FaChromecast style={{ fontSize: "24px" }} alt="Cast" />
          </button>
          <button>
            <IoIosNotificationsOutline style={{ fontSize: "24px" }} alt="Sino de notificação"/>
          </button>
          <button>
            <IoSearchOutline style={{ fontSize: "24px" }} alt="Icone de Busca"/>
          </button>
          <img className={style.profile} src={cast} alt="Foto de Perfil" />
        </div>

        </div>

       
    </header>
  );
};

export default Header;
