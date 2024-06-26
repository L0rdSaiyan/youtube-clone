import { ReactComponent as ShortsFrame } from "../assets/ShortsFrame.svg";
import "../App.css";
import buildShorts from "./shorts/buildShorts";
export default function Shorts() {
  return (
    <div>
      <h1 className="Shorts-Frame">
        <ShortsFrame  /> Shorts
      </h1>
      <div className="Carroussel">
        { buildShorts() }
      </div>
    </div>
  );
}
