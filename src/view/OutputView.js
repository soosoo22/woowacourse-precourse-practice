import { GAME, RESULT } from "../constant/message.js";
import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  print(message) {
    Console.print(message);
  },
  allCorrect() {
    Console.print(`3${RESULT.STRIKE}\n${GAME.SUCCESS}`);
  },
};
export default OutputView;
