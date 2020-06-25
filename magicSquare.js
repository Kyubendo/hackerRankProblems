function formingMagicSquare(s) {
    const len = s[0].length
    let hor = [0,0,0];
    let ver = [0,0,0,]
    let diag = [0,0];
    for (let i = 0; i<len; i++){
        for(let j = 0; j<len; j++){
            i===j&&(diag[0]+=s[i][j])
            i===len-j-1&&(diag[1]+=s[i][j])

            hor[i]+=s[i][j]
            ver[j]+=s[i][j]
        }
    }
    console.log(ver,hor,diag)
}

s = [ [ 4, 8, 2 ],
      [ 4, 5, 7 ],
      [ 6, 1, 6 ] ]


// 4 8 2
// 4 5 7
// 6 1 6
console.log(formingMagicSquare(s))