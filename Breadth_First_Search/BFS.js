const BFS = function(array, start_nood) {
    
    // 배열을 이용해서 큐만든다
    const visitedQueue = [];
    const need_visitQueue = [];

    need_visitQueue.push(start_nood);
    let count = 0; // 시간복잡도 계산을 위해서
    
    while(need_visitQueue.length !== 0) { // 앞으로 방문할 노드가 없으면 탈출
        count += 1;
        let node = need_visitQueue.shift(); // 첫번째 노드를 뺴낸다 -> visitedQueue로 보낸다
        if(visitedQueue.includes(node) == false) { // 중요!!! 이전에 방문을 했던 것이라면...
            visitedQueue.push(node);
            need_visitQueue.concat(array[node]);
        }

    console.log(count);
    return visitedQueue;
    }
}

const graph = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

console.log(BFS(graph, 'G'));
