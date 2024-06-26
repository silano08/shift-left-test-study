단위 테스트 효율화 : 쉬운 단위테스트
=============

커버리지 비율은 80:20(파레토 법칙)의 두 부분만 측정할 수 있다면 충분

+) 파레토 법칙이란 80:20 법칙이라고도 불리는데, 80%의 결과가 20%의 원인에 의해 발생한다는 것

## 5.1 코드 복잡도

### 소스 코드 복잡도란?

- 복잡도가 높음 = if 또는 switch 문이 많음
- 복잡도가 낮음 = if 또는 switch 문이 적음

복잡도가 높을수록 유지보수성은 낮아지고, 복잡도가 낮을수록 유지보수성 높아짐

**C(복잡도) = e(프로그램에 포함된 경로 수) - n(프로그램에 포함된 분기점 수) + 2**

이러한 예제코드가 있을때

```
let x = 1;  
while (x < 10) {  
  if (x % 2 === 0) {  
    console.log('x는 지금 짝수입니다!')  
  } else {  
    console.log('x는 지금 홀수입니다!')  
  }  
  x++;  
}

```

![alt text](image-1.png)

(출처 : https://velog.io/@bdbest72/%EC%BD%94%EB%93%9C-%EB%B3%B5%EC%9E%A1%EB%8F%84%EB%A5%BC-%EC%B8%A1%EC%A0%95%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


이때 경로수(8) - 노드 갯수(7) + 2 이므로 복잡도는 3인셈

## 5.2 단위 테스트의 대상

버그를 완전히 없애는건 불가능! 소프트웨어는 여전히 중간에 동작이 중단되는 행업 현상을 겪음 -> 그런데 사실 소프트웨어가 사용자가 바라는 기능을 충분히 제공한다면 상관없음, 크게 중요하지도 않은 세세한 테스트를 하며 힘을 빼지 말것

개선이란 현재의 업무를 효율적으로 수행, 그리고 동시에 품질을 높이는 것임

그러면 어떻게?

### 단위 테스트할 범위를 선정

80:20 -> 소프트웨어의 20%부분에서 80%의 버그가 나옴(막연하게 생각하자면..)
최근 발표된 논문을 참고하자면 
**대부분의 버그는 소스 코드 파일의 약 10~20%의 변경횟수가 많은 파일에서 발생함**

그렇다면? 코드의 20%를 커버하면서 탐색적 테스트를 수행하면 테스트는 완료! 
그런데 그 20%를 어떻게 추출? -> 최근 변경 횟수에 가중치를 붙이고 과거에 변경된 파일은 가중치를 붙이지 않음

**핫스팟 사고방식**
핫스팟 = 버그가 발생하기 쉬운 정도를 수치화한 것
핫스팟 값이 큰 파일에서 버그가 발생한다고 봐도 됨. 계산은 아래와 같이 (식 첨부 안했는데..
무언가의 계산에 따라 값을 구하고, 그 값이 크면 소스 코드를 확인한다 정도로 생각하기)

### 독자적인 방법: 파일을 2개로 분리
고전적 방법에서는 파일 변경 횟수만 고려하지만, 필자는 단위 테스트 수행 우선순위 지표로 파일 행 수의 길이를 추가함. 파일의 최근 변경 횟수가 많고 행 수가 긴것 부터 단위 테스트를 수행(가중치를 추가하는 셈)

복잡도와 핫스팟 값을 구해 어디부터 수정해야할 지 확인할 것
예를 들어 환경 정의 파일일때는 복잡도가 높으나 핫스팟이 작을 수 있고
간단한 구조임에도 변경 횟수가 많은 경우도 있음

복잡도가 높고 핫스팟 값이 높다 = 리팩토링
복잡도 낮은데 핫스팟 값이 낮다 = 코드 재확인

리팩토링할 시간이 없다면요? -> 먼저 파일을 2개로 분리(진짜. 물리적으로. 코드를 뜯으란얘기)

코드가 긴 파일은 규모가 큰 클래스 이거나 깔끔한 구조를 만들지 못해 함수들의 쓰레기통(ㅋㅋ)이 된 경우가 많음 이걸 물리적으로 구분해놓으면 결국 정리하게 됨


PS)

- 블랙박스 테스트 : 요구사항에 사양에 따라 정의된 입력값과 출력값을 사용해 시스템 또는 컴포넌트가 사양대로 작동하는지 확인하는 테스트
- 화이트박스 테스트: 요구사항 사양에 따라 정의된 입력값과 출력값을 사용해 시스템 또는 컴포넌트가 사양대로 작동하는지를 코드 커벌히지를 통해 확인하는 테스트.

-> 본질적으로 블랙박스 테스트와 화이트박스 테스트는 같음(왜 같다고보지? 보통은 다른딩)

- 커버리지 비율 달성 : 커버리지 비율은 테스트가 소프트웨어 코드의 얼마나 많은 부분을 실행(또는 '커버')했는지를 수치적으로 나타내는 지표입니다. 
- 기댓값 체크 : 기댓값 체크는 테스트 케이스를 실행했을 때, 소프트웨어가 예상되는 특정 결과 또는 값을 반환하는지를 확인하는 과정
  -  입력 값: 테스트 실행에 사용되는 데이터입니다.
  -  기대 결과 (기댓값): 주어진 입력에 대해 시스템이 반환해야 하는 예상 출력 값입니다.
  

따라서, 커버리지 비율은 테스트가 소프트웨어 코드의 어느 부분을 검증했는지에 대한 양적 평가를 제공하는 반면, 기댓값 체크는 테스트의 질적 측면, 즉 소프트웨어가 올바른 결과를 반환하는지를 평가합니다. 두 개념은 서로 보완적이며, 소프트웨어 개발 과정에서 모두 중요한 역할을 합니다.








