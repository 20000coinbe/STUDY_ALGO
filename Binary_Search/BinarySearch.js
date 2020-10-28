// 이진탐색
const BinarySerach = function(array, search) {
    if(array.length == 1 && array[0] == search)
        return true;
    if(array.length == 1 && array[0] != search)
        return false;
    if(array.length == 0)
        return false;
    
    let pivot = Math.floor(array.length / 2);

    if(search == array[pivot]) {
        return true;
    } else {
        if(search > array[pivot]) {
            return BinarySerach(array.slice(pivot), search);
        } else
            return BinarySerach(array.slice(0, pivot), search);
    }
}

const list_array = [1, 5, 12, 19, 34, 58];

console.log(list_array);

console.log(BinarySerach(list_array, 34));

console.log(BinarySerach(list_array, 6));

