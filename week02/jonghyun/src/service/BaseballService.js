import { ERROR } from "../constants/error.js";
import { VALUE } from "../constants/rule.js";
import { END_GAME, START_GAME } from "../constants/view.js";
import { Util } from "../utils/index.js";
import { Validation } from "../validation/index.js";
import { Input } from "../view/Input.js";
import { Output } from "../view/Output.js";

export class BaseballService {
  #answer = [];

  constructor(stage, min, max) {
    this.stage = stage;
    this.min = min;
    this.max = max;

    this.validator = new Validation(this.stage, this.min, this.max);
  }

  #createAnswer() {
    const answer = [];

    while (answer.length < this.stage) {
      const pickedNumber = Util.pickNumberInRange(this.min, this.max);

      if (!answer.includes(pickedNumber)) answer.push(pickedNumber);
    }

    return answer;
  }

  countBall(input) {
    let ball = 0;
    for (let i = 0; i <= input.length; i++) {
      const itemIndex = this.#answer.findIndex(
        (item) => item === Number(input[i])
      );

      const isBall = itemIndex !== -1 && itemIndex !== i;

      if (isBall) ball++;
    }

    return ball;
  }

  countStrike(input) {
    let strike = 0;
    for (let i = 0; i <= input.length; i++) {
      const itemIndex = this.#answer.findIndex(
        (item) => item === Number(input[i])
      );

      const isStrike = itemIndex !== -1 && itemIndex === i;

      if (isStrike) strike++;
    }

    return strike;
  }

  getScore(input) {
    const ball = this.countBall(input);
    const strike = this.countStrike(input);

    return { ball, strike };
  }

  async makeAnAttempt() {
    const input = await Input.makeAnAttempt();

    if (!this.validator.isValidInputLength(input)) {
      throw Util.print(ERROR.NOT_VALID_LENGTH);
    }

    if (!this.validator.isNumberInRange(input)) {
      throw Util.print(ERROR.NOT_VALID_RANGE);
    }

    if (this.validator.hasDuplicatedNumber(input)) {
      throw Util.print(ERROR.HAS_DUPLICATE);
    }

    const { ball, strike } = this.getScore(input);

    Output.printScore(ball, strike);

    const isAnswer = strike === this.stage;

    if (!isAnswer) this.makeAnAttempt();

    const result = await Output.printComplete(this.stage);
    switch (result) {
      case "1":
        return this.start();
      case "2":
        return Util.print(END_GAME);
      default:
        throw Util.print(ERROR.NOT_VALID_NUMBER);
    }
  }

  start() {
    this.#answer = this.#createAnswer();
    Util.print(START_GAME);
    this.makeAnAttempt();
  }
}
