import { useEffect, useState } from "react";

function Stopwatch() {
    
    const [timePassed, setTimePassed] = useState(0);
    const [timeStart, setTimeStart] = useState(false);

    useEffect(() => {
        let interval;

        if (timeStart) {
            interval = setInterval(() => {
                setTimePassed(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timeStart]);

    function handleOnStart() {
        setTimeStart(true);
    }

    function handleOnStop() {
        setTimeStart(false);
    }

    function handleOnReset() {
        setTimePassed(0);
        setTimeStart(false);
    }

    return (
        <>
            <div className="container">
                <h1>StopWatch</h1>
                <h2 style={{ color: timeStart ? 'green' : 'red' }}>{timePassed}</h2>
                <div className="buttonsBox">
                    <button onClick={handleOnStart}>Start</button>
                    <button onClick={handleOnStop}>Stop</button>
                    <button onClick={handleOnReset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default Stopwatch;
