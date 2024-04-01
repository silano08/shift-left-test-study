import { Validation } from "../src/validation";

describe("Valdiation :: ", () => {
  it("isValidInputLength :: 숫자 야구 게임의 길이와 입력한 값의 길이가 동일하면 true", () => {
    const answer = "123";

    const validation = new Validation(answer.length);

    expect(validation.isValidInputLength("123")).toBe(true);
    expect(validation.isValidInputLength("1234")).toBe(false);
    expect(validation.isValidInputLength("23")).toBe(false);
  });

  it("isPositiveInteger :: n개가 정수가 아니라면 false", () => {
    const answer = "123";
    const validation = new Validation(answer.length);

    expect(validation.isPositiveInteger("")).toBe(false);
    expect(validation.isPositiveInteger("123")).toBe(true);
    expect(validation.isPositiveInteger("-1230")).toBe(false);
    expect(validation.isPositiveInteger("1234a")).toBe(false);
    expect(validation.isPositiveInteger("vcz23b")).toBe(false);
    expect(validation.isPositiveInteger("-1")).toBe(false);
    expect(validation.isPositiveInteger("-0")).toBe(false);
    expect(validation.isPositiveInteger("+0")).toBe(false);
    expect(validation.isPositiveInteger("0")).toBe(false);
    expect(validation.isPositiveInteger("+1")).toBe(false);
    expect(validation.isPositiveInteger("1.1")).toBe(false);
    expect(validation.isPositiveInteger("1.0")).toBe(false);
  });

  it("isNumberInRange :: 숫자의 범위가 1 - 9가 아니라면 false", () => {
    const answer = "123";
    const validation = new Validation(answer.length, 1, 9);

    expect(validation.isNumberInRange("")).toBe(false);
    expect(validation.isNumberInRange("0123")).toBe(false);
    expect(validation.isNumberInRange("123")).toBe(true);
  });

  it("hasDuplicatedNumber :: 중복된 숫자가 존재한다면 false", () => {
    const answer = "123";
    const validation = new Validation(answer.length);

    expect(validation.hasDuplicatedNumber("112")).toBe(true);
    expect(validation.hasDuplicatedNumber("111")).toBe(true);
    expect(validation.hasDuplicatedNumber("124")).toBe(false);
    expect(validation.hasDuplicatedNumber("141")).toBe(true);
  });
});
