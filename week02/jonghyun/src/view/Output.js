import {
  BALL,
  COMPLETE_GAME,
  NOTHING,
  RESTART_OR_EXIT,
  STRIKE,
} from "../constants/view.js";
import { Util } from "../utils/index.js";

export class Output {
  static async printScore(ball, strike) {
    if (ball === 0 && strike === 0) return Util.print(NOTHING);
    if (ball === 0 && strike !== 0) return Util.print(`${strike}${STRIKE}`);
    if (ball !== 0 && strike === 0) return Util.print(`${ball}${BALL}`);
    if (ball !== 0 && strike !== 0)
      return Util.print(`${ball}${BALL} ${strike}${STRIKE}`);
  }

  static async printComplete(length) {
    Util.print(length + COMPLETE_GAME);
    const result = await Util.readLine(`${RESTART_OR_EXIT}\n`);

    return result;
  }
}
