// null, undefined
let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`); //object (EcmaScript의 설계상 오류로 원래는 null 이어야함.)
let x;
console.log(`x: ${x}, type ${typeof x}`); //undefined


// null vs undefined
console.log('null vs undefined');
console.log('null === undefined: ', null === undefined);    /// === 동등연산자: 타입과 같이 비교함
console.log('null == undefined: ', null == undefined);      /// == : 타입 비교 x
