import { useState, useEffect } from "react"

export default function QuestionTimer({onTimeout, timeout, mode}){

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const myTimeout = setTimeout(onTimeout,timeout)

        return () => {
            clearTimeout(myTimeout);
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        const myInteval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100)

        return () => {
            clearInterval(myInteval)
        }
    }, [])

    return <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
}