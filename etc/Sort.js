// Array.sort([compareFunction]) : 정렬시키는 메소드

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b; // 오름차순 정렬
}

console.log('stringArray : ', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray : ', numberArray.join());
console.log('Sorted without a compare function : ', numberArray.sort());
console.log('Sorted with compareNumbers : ', numberArray.sort(compareNumbers)); // 오름차순

console.log('numbericStringArray : ', numericStringArray.join());
console.log('Sorted without a compare function : ', numericStringArray.sort());
console.log('Sorted with compareNumbers : ', numericStringArray.sort(compareNumbers));

console.log('4번쨰 배열 : ', mixedNumericArray.join());
console.log('4번쨰 배열 + sort() : ', mixedNumericArray.sort());
console.log('4번쨰 배열 + sort(compareNumbers) : ', mixedNumericArray.sort(compareNumbers)); // 오름차순


// 내림차순 
function compareNumbers(a, b) {
    return b - a; // 뒤에 있는 수에서 앞에 있는 수를 빼주면
}

console.log("numberArray : ", numberArray.sort(compareNumbers)); // 200, 40, 5, 1