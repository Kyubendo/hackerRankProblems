const {performance} = require('perf_hooks');
function powerSum(X, N) {
    const maxNum = ~~Math.pow(X,1/N)
    const arr = []
    for (let i=1; i<=maxNum; i++){
        arr.push(Math.pow(i,N))
    }
    let resCount = 0
    function comb(cur, rest) {

        if (rest.length===0) {
            return
        }
        comb(cur.concat(rest[0]), rest.slice(1))

        let sum = 0
        for (let i=0;i<cur.length;i++){
            sum+=cur[i]
            if (sum>X)return;
        }
        if (sum===X) {
            resCount++;
            return;
        }
        comb(cur, rest.slice(1))
    }
    comb([], arr)
    if (arr[arr.length-1]===X)resCount++
    return resCount
}
const t0 = performance.now()
console.log(powerSum(100, 2))
const t1 = performance.now()
console.log(~~(t1-t0)/1000)
