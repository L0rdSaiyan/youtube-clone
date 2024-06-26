import add from "./assets/add.png";
import home from "./assets/home.png";
import library from "./assets/library.png";
import shorts from "./assets/shorts.png";
import subscriptions from "./assets/subscriptions.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footerContainer">
          <div className="iconsContainer">
            <a href="/">
              <img src={home} alt="" className="navIcons" />
              Home
            </a>
          </div>
          <div className="iconsContainer">
            <a href="/">
              <img src={shorts} alt="" className="navIcons" />
              Shorts
            </a>
          </div>
          <div className="addContainer">
            <a href="/">
              <img src={add} alt="" className="navIcons" />
            </a>
          </div>
          <div className="iconsContainer">
            <a href="/">
              <img src={subscriptions} alt="" className="navIcons" />
              Subscriptions
            </a>
          </div>
          <div className="iconsContainer">
            <a href="/">
              <img src={library} alt="" className="navIcons" />
              Library
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
