const makeRoute = (start, routeArr, goal, location) => {
    //線を引くための配列を作成
    console.log(location);
    let output = [];
    output.push([start, location[routeArr[0]]]);
    console.log(routeArr);
    console.log(routeArr[0]);
    console.log(output);

    for (let i = 1; i < routeArr.length - 1; i++) {
        // console.log(result[i + 1]);
        output.push([location[routeArr[i]], location[routeArr[i + 1]]]);
        console.log(output);
    }
    output.push([location[routeArr[routeArr.length - 1]], goal]);
    console.log(output);
    return output;
}

module.exports = { makeRoute };