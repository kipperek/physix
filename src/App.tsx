import { useEffect } from "react";
import "./App.css";
import main from "./Main";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    main(ctx, canvas);
  }, []);

  return <canvas id="canvas" width="1700" height="1000"></canvas>;
}

export default App;
