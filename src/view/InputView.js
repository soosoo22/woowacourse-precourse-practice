import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readNumber(query) {
    const input = await Console.readLineAsync(query);
    return input;
  },
};

export default InputView;
