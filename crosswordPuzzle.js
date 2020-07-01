const {performance} = require('perf_hooks');

function crosswordPuzzle(arr, hints) {
    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length)
    }

    const len = 10
    const words = (hints + ';').match(/\w+;/g).map((x) => x.slice(0, -1))
    const verW = [...Array(len)].map(e => Array(2).fill(0))
    const horW = [...Array(len)].map(e => Array(2).fill(0))
    let finalArr = []
    for (let i = 0; i < len; i++)
        for (let j = 1; j < len; j++) {
            if (arr[i][j] === '-' && arr[i][j - 1] === '-') {
                horW[i][0]++
                horW[i][1] = j - horW[i][0]
            }
        }
    for (let i = 1; i < len; i++)
        for (let j = 0; j < len; j++) {
            if (arr[i][j] === '-' && arr[i - 1][j] === '-') {
                verW[j][0]++
                verW[j][1] = j
            }
        }
    for (let i = 0; i < len; i++) {
        horW[i][0] && horW[i][0]++
        verW[i][0] && verW[i][0]++
    }

    function replaceWord(start, line, word, side) {
        let newArr = arr
        if (side) {
            for (let i = start, wi = 0; i < word.length + start; i++, wi++) {
                if (!(newArr[line][i] === '-' || newArr[line][i] === word[wi])) return false
            }
            newArr[line] = newArr[line].replaceAt(start, word)
        } else {
            for (let i = 0, index = 0; i < len; i++) {
                if (newArr[i][start] === '-' || newArr[i][start] === word[index]) {
                    for (let j = 0, wi = 0; j < len; j++) {
                        if (!(newArr[j][start] === '-' || newArr[j][start] === word[wi])) break
                        if (newArr[j][start] === '-') wi++
                    }
                    if (word[index]) {
                        newArr[i] = newArr[i].replaceAt(start, word[index])
                        index++
                    }
                }
            }
        }
        finalArr = newArr.slice()
        return true
    }

    for (let i = 0; i < len; i++) {
        if (horW[i][0]) {
            for (let j = 0; j < words.length; j++) {
                if (words[j].length === horW[i][0] && replaceWord(horW[i][1], i, words[j], 1)) {
                    words.splice(j, 1)
                    break
                }
            }
        }

        for (let j = 0; j < words.length; j++) {
            if (words[j].length === verW[i][0] && replaceWord(verW[i][1], i, words[j], 0)) {
                words.splice(j, 1)
                break
            }
        }
    }

    return finalArr
}

let crossword = [
    '+----+++++',
    '++++-+++++',
    '++++-+++++',
    '++++------',
    '++++-+++-+',
    '++++-+++-+',
    '++++-+++-+',
    '++++-+++-+',
    '++++-+++++',
    '++++++++++']

const hints = 'TREE;ELEPHANTS;PICKLE;LEMON'

const t0 = performance.now()
console.log(crosswordPuzzle(crossword, hints))

const t1 = performance.now()
console.log(~~(t1 - t0) / 1000)