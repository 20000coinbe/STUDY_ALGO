// example

function isBigEnough(value) {
    return value >= 10;
}

var filtered = [50, 1, 20, 34, 5, 6, 9].filter(isBigEnough);
console.log(filtered); // [50, 20, 34]


var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query) {
    return fruits.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
