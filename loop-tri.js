
function loopTri(item, strLength) {
    let result
    for (result = item; result.length <= strLength; result += item) {
        console.log(result)
    } 
}

loopTri('*', 7)




