import {solve as solveDayOneA} from "./day01/1a";
import {solve as solveDayOneB} from "./day01/1b";
import {solve as solveDayTwoA} from "./day02/2a";
import {challengeData as dayOneChallengeData} from "./day01/challengeData";
import {challengeData as dayTwoChallengeData} from "./day02/challengeData";

console.log({day1a: solveDayOneA(dayOneChallengeData)})
console.log({day1b: solveDayOneB(dayOneChallengeData)})
console.log({day2a: solveDayTwoA(dayTwoChallengeData)})

