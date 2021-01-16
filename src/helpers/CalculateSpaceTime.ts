import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => {
    const TimeBalance:SimpleDate = calculateTimeBalance(timeMachine)
    const SpaceTime = Math.sqrt(TimeBalance.year**2 + TimeBalance.month**2 + TimeBalance.day**2)
    return SpaceTime;
}

export default calculateSpaceTime;