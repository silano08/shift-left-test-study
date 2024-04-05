import { BaseballService } from "./service/BaseballService.js";
import { VALUE } from "./constants/rule.js";

class App {
  async play() {
    const game = new BaseballService(VALUE.STAGE, VALUE.MIN, VALUE.MAX);

    game.start();
  }
}

const app = new App();
app.play();

export default App;

/**
 * validation
 *
 * 문자 길이가 n개가 아니라면 throw
 * n개가 전부 숫자가 아니라면 throw (경곗값 테스트 적용)
 * 숫자의 범위가 1 - 9가 아니라면 throw (경곗값 테스트 적용)
 * 같은 숫자가 존재한다면 throw ex)111 (경곗값 테스트 적용)
 */

/**
 * 기능 구현 사항
 *
 * index는 일치하지 않지만 포함되는 숫자 갯수 a개, index가 일치하는 숫자의 갯수 b개 -> a볼 b스트라이크
 * index는 일치하지 않지만 포함되는 숫자 갯수 a개, index가 일치하는 숫자의 갯수 0개 -> a볼
 * index는 일치하지 않지만 포함되는 숫자 갯수 0개, index가 일치하는 숫자의 갯수 b개 -> b스트라이크
 * index는 일치하지 않지만 포함되는 숫자 갯수 0개, index가 일치하는 숫자의 갯수 0개 -> 낫싱
 *
 * index는 일치하지 않지만 포함되는 숫자 갯수 0개, index가 일치하는 숫자의 갯수 n개 ->
 * n스트라이크
 * n개의 숫자를 모두 맞히셨습니다! 게임 종료
 * 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
 *
 * 1: 생성자 다시 생성 및 게임 시작
 * 2: 게임 종료
 */

/**
 * 생성자
 *
 * 숫자 n이 부여되면 n개의 랜덤 숫자 생성 -> n은 최대 9
 * validation은 n에 의해 변경됨 -> 생성자에서 validation 함수의 생성 또한 진행되어야 하는가 ?
 * 생성자에 DI를 통해 validation class를 주입해주면 어떨까?
 */

/**
 * woowacourse/mission-utils는 외부 라이브러리
 * 내 클래스들의 비즈니스 로직이 외부 라이브러리의 구현 세부 사항과 밀접하게 결합되기 때문에
 * 1. 이를 캡슐화하여 변경에 용이하게 하고,
 * 2. 코드의 나머지 부분을 숨겨 상호작용을 단순하게 구현하기 위해
 *
 * 퍼사드 패턴 사용
 */

// Console.print("숫자 야구 게임을 시작합니다.");
// Random.pickNumberInRange(1, 9); // 생성자 함수로 분리
// Console.readLineAsync("숫자를 입력해주세요 : "); // input
// Console.print(`${1}볼 ${1}스트라이크`); // output -> if n 스트라이크가 아니면 input 다시 실행
// Console.readLineAsync(`${3}스트라이크`); // output -> 3스트라이크라면 output 실행
// Console.print(`n개의 숫자를 모두 맞히셨습니다! 게임 종료`); // output -> if n 스트라이크가 아니면 input 다시 실행
// Console.readLineAsync(
//   `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`
// );
// // input = 1이면
// Console.print("숫자 야구 게임을 시작합니다.");
// Random.pickNumberInRange(1, 9); // 생성자 함수로 분리
// // input = 2라면
// Console.print("게임을 종료합니다.");
// // input = 0, 3, ...n 및
// // 숫자가 아닌 값이라면 종료 -> 숫자가 아닌 값을 검증하는 함수 분리 (validation)
// Console.print("게임을 종료합니다.");
