// indexOf() : 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1

console.log(beasts.indexOf('bison', 2)); // 4

console.log(beasts.indexOf('giraffe')); // -1

console.log("-----------------------------------------");
console.log
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
console.log(idx); // 0
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);

console.log("-----------------------------------------");

