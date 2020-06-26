const {performance} = require('perf_hooks');
function crosswordPuzzle(arr, hints) {
    const len = 10
    const words = (hints + ';').match(/\w+;/g).map((x) => x.slice(0, -1))
    const verW = [...Array(len)].map(e => Array(2).fill(0))
    const horW = [...Array(len)].map(e => Array(2).fill(0))

    for (let i = 1; i < len; i++)
        for (let j = 1; j < len; j++) {
            if(arr[i][j] === '-' && arr[i][j - 1] === '-') {
                horW[i][0]++
                horW[i][1]=j-horW[i][0]
                }
            if(arr[i][j] === '-' && arr[i - 1][j] === '-') {
                verW[j][0]++
                verW[j][1]=i-verW[j][0]
            }
        }
    for (let i = 0; i<len; i++) {
        horW[i][0]&&horW[i][0]++
        verW[i][0]&&verW[i][0]++
    }
    function replaceWord(start, line, word) {
        let newArr = arr
        //for (let i=start; i<word.length;i++){
            newArr[line] = newArr[line].replace(/-{1,10}/, word)
        //}
        console.log(newArr)

    }

    function putWords() {
        for (let i = 0; i<len;i++) {
            if(!horW[i][0]) continue
            for (let j =0; j<words.length; j++){

               if(words[j].length===horW[i][0]){
                   replaceWord(horW[i][1], i, words[j])
                   break
               }
            }
        }


    }
    putWords()
    console.log(horW)
}

const crossword = [
    '+-++++++++',
    '+-++++++++',
    '+-++++++++',
    '+-----++++',
    '+-+++-++++',
    '+-+++-++++',
    '+++++-++++',
    '++------++',
    '+++++-++++',
    '+++++-++++']

const hints = 'LONDON;DELHI;ICELAND;ANKARA'

const t0 = performance.now()
crosswordPuzzle(crossword, hints)

const t1 = performance.now()
console.log(~~(t1-t0)/1000)