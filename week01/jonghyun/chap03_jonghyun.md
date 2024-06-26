### Chapter 03

테스트 라이프 사이클에서 각 단계에서 적절한 테스트 방법을 수행해야 함

- **테스트 라이프 사이클:** 단위테스트 → 통합테스트 → 시스템 테스트
- **테스트 방법:** 경곗값 테스트, 상태 전이 테스트, 조합 테스트

**조합테스트** : 입력 값을 조합하여 테스트 케이스를 생성하고 테스트

- All combination testing : 모든 경우의 수를 전부 테스트함
- ⭐️ Pair-wise testing: 두 입력값의 조합을 모두 테스트 (대부분 결함이 2개 요소의 상호작용에서 발생하기 때문에 두개씩 조합하여 테스트함)
- Each choice testing: 입력 값을 최소 한 번 이상 테스트
- Base choice testing: 기본 입력 값으로만 테스트 (base를 하나 만들고, 하나씩만 변경하여 테스트 진행하는 방법)

Pari-wise 테스팅을 가장 많이 하고, 조합의 수가 증가하면 사람의 힘으로 테스트가 불가능하므로 Tool(Allpairs, PICT 등등..)을 사용하여 테스트한다고 함

**경곗값 테스트** (css 미디어쿼리를 예시로 들 수도 있겠다)

일반적으로 경계에서 버그가 발생함

- 닫힘 관계버그 (ex. ≥ 와 >)
- 잘못된 숫자 입력 및 오해 (ex. a ≥ 1과 a≥2)
- 경계가 없음 (ex.주석처리)
- 여분의 경계

**상태 전이 테스트**

상태에서 다른 상태로 넘어가기 위해서는 전이가 발생함. <br/>
현재 상태에서 다른 상태로 변경되는 것을 테스트

- 상태 전이 매트릭스를 사용함
- 상태 전이 테스트에서는
  1. 클래스나 함수 레벨에서 단위 테스트가 끝난 뒤
  2. 해당 클래스가 인스턴스가 되어 다른 함수나 인스턴스가 호출되는지 등을 확인

---

### 추가로 알아본 것

**탐색적 테스트**:

- 사전에 테스트 케이스를 작성하지 않고 테스트 대상을 자유롭게 탐색하면서 테스트를 수행
- 예상하지 못한 오류를 발견하는 데에 효과적임
- 공식 테스팅을 보완하는 측면에서 활용하거나 병행하는 것이 가장 좋음
