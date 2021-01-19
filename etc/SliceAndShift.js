// Array.Shift() : 배열의 0번째요소를 제거하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당긴다
//                 return 제거된 값, 만약 배열의 길이가 0이면 undefiend를 리턴한다

let animal = ['원숭이', '사자', '강아지', '말', '소', '고양이'];

let first = animal.shift(); // 제거 후 리턴

console.log(first); // 원숭이
console.log(animal); // 원숭이를 제외한 나머지 ['사자', '강아지'......]


console.log("---------------------------------");
// While문에서 shifte()
while( (i = animal.shift()) !== undefined) {
    console.log(i);
}

console.log(animal);

console.log("---------------------------------");


console.log("");


// Array.slice();

let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2);

console.log(newCar);
console.log('myCar = ' + JSON.stringify(myCar)) // stringify : js값을 json문자열로 변경
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)


myHonda.color = 'blue';
console.log('new color is ' + myHonda.color);

console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);


