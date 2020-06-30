function superDigit(n, k) {
    const sumNum = (num) => num.toString().length === 1 ? num : sumNum(num.toString().split('').map(x => +x).reduce((a, b) => a + b))
    return (sumNum(n.toString().split('').map(x => +x).reduce((a, b) => a + b) * k))
}

const n = 9875
const k = 4
console.log(superDigit(n, k))
