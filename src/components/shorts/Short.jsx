import "../../App.css";
import More from "../../assets/More.png";

export default function Short() {
  return (
    <div className="Short">
      <div className="Short-contents">
        <div className="More">
          <img src={More} alt="More Options" className="More" />
        </div>
        <p className="Short-title">Title</p>
        <br />
        <p className="Short-views">1.7M views</p>
      </div>
    </div>
  );
}
