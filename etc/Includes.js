/* 
    Array.includes(v, i) : 배열이 특정요소를 포함하는지 판별(대소문자 구분해야한다)
                           return Boolean

     - 매개변수
       ○ valueToFind : 탐색할 요소
       ○ [fromIndex] : 검색할 위치, default : 0번
*/

const list = [1, 2, 4, 5];

console.log(list.includes(3)); // false
console.log(list.includes(5)); // true
console.log(list.includes(2,2)); // false : 인덱스번호 2번부터 검색하기 때문에


// 배열의 길이보다 fromindex가 큰 경우
const list2 = ['a', 'b', 'c'];

console.log(list2.includes('c', 100)); // false

// fromIndex가 음수일경우 

console.log(list2.includes('b', -100)); // true
// 음수일 경우 위치를 찾기 위한 연산을 한다 -1 * array.length 보다 작거나 같다면, 전체배열이 검색된다
console.log(list2.includes('a', -2)); // false
