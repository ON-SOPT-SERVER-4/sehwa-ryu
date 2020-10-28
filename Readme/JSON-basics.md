## JSON이란?:

**J**ava**S**cript **O**bject **N**otation의 약자로 한국말로는 **자바스크립트 객체 표현식**이라고 한다! 쉽게 말하자면 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합이라고 생각하면 되겠다.

우선 JSON의 예시를 하나 살펴보겠다.

```javascript
var myObj = {
  "name":"sophie",
  "age":22,
  "address": "secret",
  "schools": [
    { "name":"blahblah", "type": "College" },
    { "name":"blahblahblah", "type": "College - Exchange" },
    { "name":"LALALA", "type": "High School" }
  ]
 }
```

JSON은 기본적으로 **name-value** 형태의 쌍으로 이루어져있다. (예: "age"가 name, 21이 value) 이때 name인 애들은 무조건 String 값들이기 때문에 만드시 큰 따옴표로 묶어줘야 한다!

구조를 뜯어보자면 첫번째로 중괄호 { 가 등장한다. 중괄호 안은 객체(Object), 즉, **name-value 쌍의 집합으로 구성**되어 있다! 이 name-value쌍은 콜론 (:)으로 이어져 있어야 한다.

중간에 "schools"라는 name안에 있는 value가 대괄호 \[\] 로 감싸여져 있는 것을 볼 수 있는데,  JSON에서 **대괄호 \[\]는 "배열"**을 의미한다.

위의 예시에서는 "schools"라는 name에 이어져있는 value값이 대괄호 배열 안에 새로운 **객체**로 존재하고 있다. 

일반적으로 배열 안에는 또 다른 객체가 들어갈 수도 있고, 또 다른 배열이 들어갈 수도 있다! 예제로 살펴보겠다.

```javascript
[ 10, {"year": 2020}, [30, "잼땅"]]
```

이 배열은 **기본 자료형**(10), **객체**({"year": 2020}), **배열**(\[30, "잼땅"\])로 구성되어 있는 것을 확인할 수 있는데 여기서도 **객체**는 name-value 쌍의 형식을 지키고 있다!

요약하자면:

> 1\. JSON은 name-value의 쌍의 **객체**로 이루어져 있다. 

> 2\. {} **중괄호는 객체**를 표현한다. 객체는 무조건 콜론으로 이어진 name-value 쌍의 데이터들로 이루어져 있어야 한다.

> 3\. \[\] **대괄호는 배열**을 표현한다. 배열 안에는 자유로운 형식의 데이터들이 들어갈 수 있다.