const makeRoute = (start, routeArr, goal, location) => {
    //線を引くための配列を作成
    let output = [];
    output.push([start, location[routeArr[0]]]);

    for (let i = 0; i < routeArr.length-1; i++) {
        // console.log(result[i + 1]);
        output.push([location[routeArr[i]], location[routeArr[i + 1]]]);
    }
    output.push([location[routeArr[routeArr.length - 1]], goal]);
    // console.log(output);
    return output;
}

module.exports = { makeRoute };