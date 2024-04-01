/**
 * validation
 *
 * 문자 길이가 n개가 아니라면 throw
 * n개가 전부 숫자가 아니라면 throw (경곗값 테스트 적용)
 * 숫자의 범위가 1 - 9가 아니라면 throw (경곗값 테스트 적용)
 * 같은 숫자가 존재한다면 throw ex)111 (경곗값 테스트 적용)
 */

export class Validation {
  constructor(length) {
    this.length = length;
  }

  isValidInputLength(input) {
    return false;
  }

  isNumber(input) {
    return false;
  }

  isNumberInRange(input) {
    return false;
  }

  hasDuplicatedNumber(input) {
    return false;
  }
}
