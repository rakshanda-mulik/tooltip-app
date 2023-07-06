import "./index.css";

export default function TooltipPositionSelector({position, setPosition}) {
    return <div className="radio-buttons">
        <div>
            <input type="radio" checked={position === "top"} onChange={() => setPosition("top")} />
            <label>Top</label>
        </div>
            <div>
            <input type="radio" checked={position === "bottom"} onChange={() => setPosition("bottom")} />
            <label>Bottom</label>
        </div>
        <div>
            <input type="radio" checked={position === "left"} onChange={() => setPosition("left")} />
            <label>Left</label>
        </div>
        <div>
            <input type="radio" checked={position === "right"} onChange={() => setPosition("right")} />
            <label>Right</label>
        </div>
  </div>
}