const BFS = function(array, start_nood) {
    
    // 배열을 이용해서 큐만든다
    let visitedQueue = []; // 방문했던 노드
    let need_visitQueue = []; // 앞으로 방문할 노드

    need_visitQueue.push(start_nood);

    let count = 0; // 시간복잡도 계산을 위해서
    
    while(need_visitQueue.length !== 0) { // 앞으로 방문할 노드가 없으면 탈출
        count += 1;
        const node = need_visitQueue.shift(); // 첫번째 노드를 뺴낸다 -> visitedQueue로 보낸다
        if(!visitedQueue.includes(node)) { // 중요!!! 이전에 방문을 했던 것이라면...
            visitedQueue.push(node);
            need_visitQueue = [...need_visitQueue, ...graph[node]]; // 비구조화 할당
        }
    }
    console.log(count); // 19 = 노드 수+ 간선(Edge)의 수 
    return visitedQueue;
}

const graph = {
    A : ['B', 'C'],
    B : ['A', 'D'],
    C : ['A', 'G', 'H', 'I'],
    D : ['B', 'E', 'F'],
    E : ['D'],
    F : ['D'],
    G : ['C'],
    H : ['C'],
    I : ['C', 'J'],
    J : ['I']
};

console.log(BFS(graph, 'A')); 
/*[
    'A', 'B', 'C', 'D',
    'G', 'H', 'I', 'E',
    'F', 'J'
  ]*/
