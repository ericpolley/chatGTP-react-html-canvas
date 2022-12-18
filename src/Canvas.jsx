import { useRef } from "react";
import { useState, useEffect } from "react";


function CharacterCanvas(props)  {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCharacterCircle(canvasRef, props.x, props.y);
  }, [props.x, props.y]);

  return (
    <canvas ref={canvasRef} className="canvas" width="400" height="400"></canvas>
  );
}



function drawCharacterCircle(canvasRef, x, y) {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}




export default function Canvas() {
  const [x, setX] = useState(200);
  const [y, setY] = useState(200);

  useEffect(() => {
    function moveCharacterCircle(event) {
      if (event.keyCode == 37) {
        // left arrow key
        setX(x - 5);
      } else if (event.keyCode == 38) {
        // up arrow key
        setY(y - 5);
      } else if (event.keyCode == 39) {
        // right arrow key
        setX(x + 5);
      } else if (event.keyCode == 40) {
        // down arrow key
        setY(y + 5);
      }
    }
    document.addEventListener("keydown", moveCharacterCircle);
    return () => {
      document.removeEventListener("keydown", moveCharacterCircle);
    };
  }, [x, y]);

  return (
    <div>
      <CharacterCanvas x={x} y={y} />
    </div>
  );
}


