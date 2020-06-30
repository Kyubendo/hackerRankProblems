function stoneDivision(n, s) {
    const arr = [[n, 1]]

    function indexOfPair(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] === num) return i
        }
        return -1
    }

    function getFactors(num) {
        const facArr = []
        // for (let i = 2; i < num; i++) {
        //     num / i === ~~(num / i) && s.includes(num/i) &&  i !== 1 && facArr.push(i)
        // }
        for (let i of s) {
            ( num/ i) === ~~( num/ i) &&  num!==i &&  facArr.push( num/ i)
        }
        return facArr.length > 0 ? facArr : false
    }

    let maxMoves = 0;

    function division(arr, moves = 0,depth=0) {

        let maxNum = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] > maxNum) maxNum = arr[i][0]
        }

        if (maxNum === 2) {
            if (moves > maxMoves) maxMoves = moves
            return
        }

        let factors = getFactors(maxNum)
        if (!factors) {
            if (moves > maxMoves) maxMoves = moves
            return
        }
        let moves1 = moves
        for (let i of factors) {

            let newArr = arr.slice()
            const maxNumI = indexOfPair(newArr, maxNum)
            const maxNumCount = newArr[maxNumI][1]

            newArr.splice(maxNumI, 1)

            const newNum = maxNum / i

            newArr.push([newNum, i*maxNumCount])
            moves+=maxNumCount
            division(newArr, moves,depth++)
            moves = moves1

        }

    }

    division(arr)
    return maxMoves
}

const n = 377083280820

const s = [1, 377083280820, 2, 188541640410, 3, 125694426940, 4, 94270820205, 5, 754166]
// const n = 64
// const s = [2, 4, 8, 16, 64]
console.log(stoneDivision(n, s));

// const a = [[12,1]]
// a[0][1]--
// (a[0][1]<=0)&&a.splice(0,1)
// ~(-1) ? a[6][1]+=2 : a.push([6, 2])
// console.log(a)