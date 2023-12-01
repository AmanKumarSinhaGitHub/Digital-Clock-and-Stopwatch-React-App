import { useEffect, useState } from "react";

function DigitalClock() {

    const [currentTime, setCurrentTime] = useState("Current Time");

    useEffect(() => {

        const currentDate = new Date();
        const interval = setInterval(() => {
            setCurrentTime(currentDate.toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [currentTime])
    return (
        <>
            <div className='container'>
                <h1>Digital Clock</h1>
                <h2><strong>{currentTime}</strong></h2>
            </div>
        </>
    )
}

export default DigitalClock;