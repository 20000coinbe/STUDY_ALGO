const mergeSort = function(array) {
    // 배열의 길이가 1일때 : 정렬할 것 없이 return
    if(array.length < 2)
        return array;
    
    // 분할
    let pivot = Math.floor(array.length / 2); // 분할 기준 만들기, 소수점일 경우 내림으로 처리
    let left = array.slice(0, pivot);
    let right = array.slice(pivot, array.length);

    return merge(mergeSort(left), mergeSort(right)); // 배열의 길이가 1일떄까지 분할 후 병합함수로 합쳐준다

}

// 병합
function merge(left, right) {
    let sortedArray = [];

    // left와 right둘다 원소가 남아 있을 때 => 반대로 말하면 둘 중 하나가 원소가 없어야 넘어가진다
    while(left.length && right.length) {
        if(left[0] > right[0]) {
            sortedArray.push(right.shift());
           
        } else {
            sortedArray.push(left.shift());
        }
    }

    // left만 남아 있을 때
    while(left.length) {
        sortedArray.push(left.shift());
    }

    // right만 남았을 때
    while(right.length) {
        sortedArray.push(right.shift());
    }

    return sortedArray;
}


const a = [34, 51, 2, 4, 55, 1, 23];
const b = [3, 11, 54, 24, 21, 78];

console.log(mergeSort(a));
console.log(mergeSort(b));