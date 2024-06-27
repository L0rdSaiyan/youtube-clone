import { ReactComponent as ShortsFrame } from "../../assets/ShortsFrame.svg";
import "./Shorts.css";
import buildShorts from "./buildShorts";
export default function Shorts() {
  return (
    <div>
      <h1 className="Shorts-Frame">
        <ShortsFrame /> Shorts
      </h1>
      <div className="Carroussel">{buildShorts()}</div>
    </div>
  );
}
