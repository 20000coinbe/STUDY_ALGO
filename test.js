// list = ["1 fracta", "1 sina","1 hana","1 robel","1 abc", "1 sina", "1 lynn"];

// list.find((element, value) => {
//     console.log(element.includes('1'));
// })

function solution(n, record) {
    var answer = [];
    
    record.filter(element => {
        if (answer.length < 5) {
            answer.push(element.includes(String(n)));
        } else 
            answer.shift();
    });

    console.log(answer);
    
    
    return answer;
}

solution(1, ["1 fracta", "1 sina","1 hana","1 robel","1 abc", "1 sina", "1 lynn"])
