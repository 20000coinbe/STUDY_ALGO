const DFS = function(array, start_node) {
    
    let visitedQueue = [];
    let need_visitStack = [];

    need_visitStack.push(start_node);

    let count = 0;

    while(need_visitStack.length !== 0) {
        count += 1;
        const node = need_visitStack.pop(); // 스택이니까 pop()을 이요해서 맨뒤에 있는 요소를 빼낸다

        if(!visitedQueue.includes(node)) {
            visitedQueue.push(node);
            need_visitStack = [...visitedQueue, ...graph[node]]; // Check!!! 비구조화 할당
        }
    }
    console.log(count);
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

console.log(DFS(graph, 'A'));
/*
    7번
    [ 'B', 'D', 'F' ]
*/


