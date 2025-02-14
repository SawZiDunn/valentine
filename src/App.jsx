import { useEffect, useRef, useState } from "react";
import gif from "./assets/bear.gif";
import "./App.css";

function App() {
    const containerRef = useRef(null);
    const ansRef = useRef(null);
    const movingBtnRef = useRef(null);

    const [maxX, setMaxX] = useState(0);
    const [maxY, setMaxY] = useState(0);

    // get container dimensions on component mount
    useEffect(() => {
        if (containerRef.current && movingBtnRef.current) {
            setMaxX(
                containerRef.current.offsetWidth -
                    movingBtnRef.current.offsetWidth
            );
            setMaxY(
                containerRef.current.offsetHeight -
                    movingBtnRef.current.offsetHeight
            );
        }
    }, []);

    const noEventHandler = () => {
        // console.log(maxX, maxY);
        const left = Math.random() * maxX;
        const top = Math.random() * maxY;

        if (movingBtnRef.current) {
            movingBtnRef.current.style.left = `${left}px`;
            movingBtnRef.current.style.top = `${top}px`;
        }
    };

    const yesEventHandler = () => {
        if (ansRef.current) {
            ansRef.current.style.display = "block";
            document.body.style.backgroundColor = "#ffcccc"; // Cute color
        }
    };

    return (
        <>
            <div className="app-container" ref={containerRef}>
                <h3>Will you be my Valentine?</h3>

                <div>
                    <button className="green" onClick={yesEventHandler}>
                        Yes
                    </button>

                    <button
                        ref={movingBtnRef}
                        className="moving-button red"
                        onMouseOver={noEventHandler}
                        onClick={noEventHandler}
                    >
                        No
                    </button>
                </div>

                <div className="ans" ref={ansRef}>
                    <span>Yay! You’re my Valentine! Love you! ❤️🥰</span>

                    <img src={gif} />
                </div>
            </div>
        </>
    );
}

export default App;
