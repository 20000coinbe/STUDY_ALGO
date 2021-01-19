// N_Queen 문제 : N X N 행렬에 N개의 퀸이 최대 몇개나 배치되는지 
const is_available = function(current_Candidate, current_Col) {
    current_row = len(current_Candidate);
    for(let queen_row = 0; queen_row < current_row; queen_row++) {
        if (current_Candidate[queen_row] == current_Col
                    && Math.abs(current_Candidate[queen_row] - current_Col) == 
                                current_row - queen_row); 
            return false;
    }
    return true;

}


const DFS = function(N, current_Row, current_Candidate, final_result) {
    if (current_Row == N) {
        final_result.push(current_Row);
        return
    }

    // 0 ~ N행까지 
    for(let i = 0; i < N; i++) {
        if(is_available(current_Candidate, candidate_Col))
            current_Candidate.push(candidate_Col);
            DFS(N, current_Row + 1, current_Row, final_result);
            // 백트레킹
            current_Candidate.pop();
    }
    
}


const solve_N_Queen = function(N) {
    let final_result = [];
    DFS(N, 0, [], final_result)
    return final_result;
}

console.log(solve_N_Queen(4));