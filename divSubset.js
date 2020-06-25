const {performance} = require('perf_hooks');
function nonDivisibleSubset(k, s) {
    let max = 0;

    function comb(cur, rest) {
        if (rest.length === 0) {
            for (let i = 0; i < cur.length - 1; i++) {
                for (let j = i + 1; j < cur.length; j++) {
                    if ((cur[j] + cur[i]) % k === 0) return;
                }
            }
            // let modArr = []
            // for (let i = 0; i < cur.length; i++){
            //     const mod = cur[i]%k
            //     if (modArr[(k-mod)%k]) return;
            //     modArr[mod] = 1
            // }


            max = cur.length
            return;
        }
        comb(cur.concat(rest[0]), rest.slice(1))
        if (cur.length+rest.length-1 <= max) return;
        comb(cur, rest.slice(1))
    }
    comb([], s)
    return max
}





const s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436, 161, 172, 183, 194, 205, 216, 227, 238, 249, 250]
const k = 7


const t0 = performance.now()
console.log(nonDivisibleSubset(k, s))
const t1 = performance.now()
console.log(~~(t1-t0)/1000)
