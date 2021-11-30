// Components

// Styles
import "./Node.css";

const Node = ({
  val,
  coords,
  handleClick,
  showGrid,
  mouseDownRef,
  setMouseDown,
}) => {
  return (
    <div
      className="node"
      style={{
        border: showGrid ? "1px solid black" : "1px solid transparent",
        backgroundColor: val === 1 ? "#888888" : "#333333",
      }}
      onMouseDown={() => {
        setMouseDown(true);
        mouseDownRef.current = true;
        handleClick(coords[0], coords[1]);
      }}
      onMouseUp={() => {
        setMouseDown(false);
        mouseDownRef.current = false;
      }}
      onMouseOver={() => {
        handleClick(coords[0], coords[1]);
      }}
    ></div>
  );
};

export default Node;
