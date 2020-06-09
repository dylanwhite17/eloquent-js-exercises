function fizzBuzz(totalNum) {
    let numsArray = []
    let countCheck = []
    let fbCount = 0
    let fCount = 0
    let bCount = 0

    for (let i = 1; i <= totalNum; i++) {
        i%5===0 && i%3===0 ? (console.log('FizzBuzz'), fbCount++) : 
        i%3===0 ? (console.log('Fizz'), fCount++) : 
        i%5===0 && !i%3===0 ? (console.log('Buzz'), bCount++)  : 
        (console.log(i), numsArray.push(i))
    } 
    
    countCheck.push(fbCount, fCount, bCount)

    console.log(`Numbers Count:${numsArray.length}, FizzBuzz Count: ${fbCount}, Fizz Count: ${fCount}, Buzz Count: ${bCount}, Total Num Check: ${countCheck.reduce((x,y)=>x+y) + numsArray.length} `)
}

fizzBuzz(100)




