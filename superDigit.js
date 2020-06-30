function superDigit(n, k) {
    const num = n.toString().split('').map(x=>+x).reduce((a,b)=>a+b)*k
    function sumNum(num) {
        if (num.toString().length===1) return num
        return sumNum(num.toString().split('').map(x=>+x).reduce((a,b)=>a+b))
    }
    return(sumNum(num))
}

const n = 9875
const k = 4
console.log(superDigit(n, k))
