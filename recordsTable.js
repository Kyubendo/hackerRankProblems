function climbingLeaderboard(scores, alice) {
    let aliceScores = []
    let aliceArr = alice;
    let aS = aliceArr.length-1
    let lastRecord = null
    let sameRecordsCount = 0;
    let flag = false
    for (let tS = 0; tS < scores.length; tS++) {
        if (!flag){
            if (scores[tS]===lastRecord) {
                sameRecordsCount++
                continue
            }
        }
        lastRecord = scores[tS]
        flag=false
        if(aliceArr[aS]>=scores[tS]){
            aliceScores.push(tS + 1 - sameRecordsCount)
            aliceArr.pop()
            aS--
            tS--
            flag=true
        }
    }
    for (let i in aliceArr){
        aliceScores.push(scores.length+1-sameRecordsCount)
    }
    return aliceScores.reverse()
}

scores = [105, 100, 100, 91, 90, 90, 80, 78, 78, 75, 60, 54, 40]
al = [20, 30, 50, 51, 65, 77, 90, 102, 109, 111]
console.log(climbingLeaderboard(scores, al))

