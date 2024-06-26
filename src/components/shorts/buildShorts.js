import "../../App.css";
import Short from "./Short";

const buildShorts = () => {
    const items = [];
    const numberOfItems = 10;
    
     for (let i = 1; i <= numberOfItems; i++) {
    items.push(<Short key={i} content={`Item ${i}`} />);
  }
        return (
          <div className="horizontal-scroll">
            <div className="scroll-content">{items}</div>
          </div>
        );
}

export default buildShorts;

