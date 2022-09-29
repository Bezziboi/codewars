// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(n){
    let square =[];
    
    for (let i = 0; i < n.length; i++) {
          square.push(n[i] * n[i]);
    }
    
    return square.reduce((a, b) => a + b, 0)
}