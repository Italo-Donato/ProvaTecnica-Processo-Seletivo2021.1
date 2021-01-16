import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    const TimeBalance = calculateTimeBalance(timeMachine)
    const TimeDiffential = TimeBalance.year*365*24 + TimeBalance.month*30*24 + TimeBalance.day * 24
    return TimeDiffential;
}

export default calculateTimeDifferential;