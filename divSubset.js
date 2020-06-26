const {performance} = require('perf_hooks');

function nonDivisibleSubset(k, s) {
    let max = 0;

    function checkMod(cur) {
        for (let i = 0; i < cur.length - 1; i++)
            for (let j = i + 1; j < cur.length; j++) {
                if ((cur[j] + cur[i]) % k === 0) return true;
            }
    }
    function comb(cur, rest, flag) {
        if (rest.length === 0) {
            if (checkMod(cur)) return;
            max = cur.length
            return;
        }

        if (checkMod(cur)) return;

        comb(cur.concat(rest[0]), rest.slice(1),flag)
        if (cur.length + rest.length - 1 <= max) return;
        if(cur.slice(-2,-1)&&(!(cur.slice(-2,-1)%k))&&(k!==1)){
            if (flag) {
                return;
            }
            flag = 1
        }


        comb(cur, rest.slice(1),flag)
    }

    comb([], s, 0)
    return max
}

const s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436,
    161, 172, 183, 194, 205, 216, 227, 238, 249, 250, 261, 272, 283, 294, 305,
    318, 327, 332, 341, 357, 366, 378, 385, 392, 405,
    418, 427, 432, 441, 453, 462, 471, 489, 492, 507,
    568, 527, 512, 561, 563, 522, 561, 559, 562, 607]
const k = 3

const t0 = performance.now()
console.log(nonDivisibleSubset(k, s, 0))
const t1 = performance.now()
console.log(~~(t1 - t0) / 1000)
