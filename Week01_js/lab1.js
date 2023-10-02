//Exercise 2

function max (a,b,c) {
    let max = a
    
    if (max < b){max = b}
    if (max < c){max = c}
    return max
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));
console.log(max (1,33,1));
console.log(max (-5,-10,-20));
console.log(max (1000,5010,4000));