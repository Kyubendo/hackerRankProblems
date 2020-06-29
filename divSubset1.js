const {performance} = require('perf_hooks');

function nonDivisibleSubset(k, s) {
    let max = 0;

    let arr1 = s.map(x => x % k)
    let arr=[]
    for (let i = 0;i<arr1.length;i++){
        if (arr.length===k)break
        if (!arr.includes(arr1[i])){
            arr.push(arr1[i])
            arr1.splice(i,1)
        }
    }
    arr = arr.concat(arr1)
    for (let g = 0; g < k; g++) {
        let modArr = []
        modArr.push(arr[g])
        elem:
            for (let j = 0; j < arr.length; j++) {
                if (arr.length - j + modArr.length <= max) continue
                if (g !== j) {
                    modArr.push(arr[j])
                    let ma = []
                    for (let i = 0; i < modArr.length; i++){
                        const mod = modArr[i]%k
                        if (ma[(k-mod)%k]) {
                            modArr.pop()
                            continue elem
                        }
                        ma[mod] = 1
                    }
                }
            }
        if (modArr.length > max) {
            max = modArr.length
        }
    }
    return max
}


// const s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436,
//     161, 172, 183, 194, 205, 216, 227, 238, 249, 250, 261, 272, 283, 294, 305,
//     318, 327, 332, 341, 357, 366, 378, 385, 392, 405,
//     418, 427, 432, 441, 453, 462, 471, 489, 492, 507,
//     568, 527, 512, 561, 563, 522, 561, 559, 562, 607
//     ]
const s = []
for (let i = 0; i < 10000; i++) {
    s.push(~~(Math.random() * 700 + 100))
}
const k = 3


const t0 = performance.now()
console.log(nonDivisibleSubset(k, s, 0))
const t1 = performance.now()
console.log(~~(t1 - t0) / 1000)
