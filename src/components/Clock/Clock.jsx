import { useEffect, useRef, useState,  } from "react";

export default function Clock() {
    
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);
    // const buttonRef = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            stop();
        }
    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

        return (
            <div>
                <p>Current time: {time.toLocaleTimeString()}</p>
                <button 
                    type="button"
                    onClick={() => stop()}
                    // ref={buttonRef}
                >Stop</button>
            </div>
            );
};