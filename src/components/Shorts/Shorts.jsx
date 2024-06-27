import { ReactComponent as ShortsFrame } from "../../assets/ShortsFrame.svg";
import "./Shorts.css";
import BuildShorts from "./BuildShorts";
export default function Shorts() {
  return (
    <div>
      <h1 className="Shorts-Frame">
        <ShortsFrame /> Shorts
      </h1>
      <div className="Carroussel">{BuildShorts()}</div>
    </div>
  );
}
