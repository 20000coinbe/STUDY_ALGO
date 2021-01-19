// 비구조화 할당(destructuring)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식 

// ex1 전개 연산자(...)를 사용해 좌항에서 명시적으로 할당되지 않는 나머지 배열 값을 사용
[a1, a2, a3, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a1); // 1
console.log(a2); // 2
console.log(rest_a); // [4, 5, 6, 7, 8, 9]

// 전개연산자 이후에 변수를 입력하거나, 좌우항이 다른 속성일 경우 에러 발생
// [a1, a2, a3, ...rest_a] = {a1 : 10, a2 : 20} // error

var { b1 : awesome_name, b2 : dumb, ... rest_b} = { b1 : 10, b2 : 20, b3 : 30, b4 : 40};
console.log(awesome_name); // 10
console.log(dumb); // 20

// 명시(var, let, const)가 없을 경우 괄호를 사용하여 묶어야한다
({a, b} = { a : 10, b : 20 });
// {c, d} = { c : 30, d : 40 } // error

// ex2 복사
// 전개 연산자를 사용하여 배열, 객체의 깊은 복사를 할 수 있다
var arr = [1, 2, 3];
var copy1 = arr;
var [...copy2] = arr;
var copy3 = [...arr];

arr[0] = 'String';
console.log("-------------------");
console.log("-------------------");
console.log(arr); // ['string', 2, 3]
console.log(copy1); // ['string', 2, 3]
// copy1은 arr을 참조하기 때문에 0번 요소가 변경되었지만 전개 연산자를 사용한 copy2, copy3는 깊은 복사
console.log(copy2); // [1, 2, 3]
console.log(copy3); // [1, 2, 3]


console.log("-------------------");
console.log("-------------------");


var preState = {
    name: "yuddomack",
    birth: "1995-12-25",
    age: 22
};

var state = {
    ...preState,
    age : 23
};

console.log(state);
console.log("이전정보를 이용하는 경우 유용하게 사용할 수 있다");








