import { ENTER_NUMBER } from "../constants/view.js";
import { Util } from "../utils/index.js";

export class Input {
  static async makeAnAttempt() {
    const result = await Util.readLine(ENTER_NUMBER);
    return result;
  }
}
