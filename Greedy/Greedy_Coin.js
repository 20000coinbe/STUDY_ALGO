// 동전문제 : 4720원을 가장적은 수의 동전으로 나타내라 동전[1, 100, 50, 500]
coin_List = [1, 100, 50, 500];

const coinCount = function(value, list) {
    
    const sortedList = [];

    let total_count = 0;

    list.sort((a, b) => { // 내림차순
        return b - a;
    });

    for(let i = 0; i < list.length; i++) {
        coin_num = Math.floor(value / list[i]);
        total_count += coin_num;
        value -= coin_num * list[i];
        sortedList.push([list[i], coin_num]);
    }

    return [total_count, sortedList]; // 자바스크립트는 배열을 이용해서 2개이상의 값을 리턴시킨다
}

console.log(coinCount(4720, coin_List));


// 부분 배낭 문제 
/*
    무게(w) 10  15  20  25  30
    가치(v) 10  12  10  8   5
*/

const backpack = function(capacity, list) {

    let sortedList = [];

    let total_value = 0;

    list.sort((a, b) => {
        return b[1] / b[0] - a[1] / a[0];
    });

    for(let i = 0; i < list.length; i++) {
        if(capacity - list[0] >= 0) {
            capacity -= list[0];
            total_value += list[1];
            sortedList.push([list[0], list[1], 1]);    
        } else {  
            let fraction = capacity / list[0];
            // 쪼개서 넣기
            total_value += list[1] * fraction
            sortedList.push([list[0], list[1], fraction]);
            break;
        }
    }
    return [total_value, sortedList];
}

var test = [[60,10], [100,20], [120,30]];


console.log(backpack(50, test));

