console.log("ForEach : 주어진 함수를 배열을 순회하며 항목처리");
console.log("주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행");

// fruits.forEach((item, index, array) => {
//     console.log(item, index);
// });
// console.log("===========================");

const array1 = ['a', 'b', 'c'];
array1.forEach(element => {
    console.log(element);
});
console.log("===========================");

// 초기화 하지않은 값의 반복 생략
const arraySpares = [1,3,,7];
let numCallbackRuns = 0;

arraySpares.forEach(element => {
    console.log(element);
    numCallbackRuns++;
})

console.log("numCallbackRuns : ", numCallbackRuns);
console.log("===========================");

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(item => {
    copy.push(item);
});

console.log(copy);
console.log("===========================");

console.log("배열콘텐츠 출력");
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

[2,5,,9].forEach(logArrayElements);

console.log("===========================");
console.log("thiArg사용");

function Counter() {
    this.sum = 0
    this.count = 0
}

Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry
        ++this.count
    }, this)
}

const obj = new Counter()
obj.add([2, 5, 9]);
console.log(obj.count, obj.sum);

console.log("===========================");
console.log("객체복사함수");

// function copy(obj) {
//     const copy = Object.create(Object.getPrototypeOf(obj));
//     const propNames = Object.getOwnPropertyNames(obj);

//     propNames.forEach(function(name) {
//         const desc = Object.getOwnPropertyDescriptor(obj, name);
//         Object.defineProperty(copy, name, desc);
//     });

//     return copy;
// }

console.log("===========================");
console.log("반복 중 배열이 변경으로 인한 반복 생략");

let words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
    console.log(word);
    if (word == 'two') {
        words.shift();
    }
});








