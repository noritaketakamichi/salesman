const calcDistnceArr = (start, currentRouteArr, goal, location) => {
    const wholeRoute = makeWholeroute(start, currentRouteArr, goal, location);

    return [[currentRouteArr[0], calcTotalDist(wholeRoute[0])],
    [currentRouteArr[1], calcTotalDist(wholeRoute[1])],
    [currentRouteArr[2], calcTotalDist(wholeRoute[2])],
    [currentRouteArr[3], calcTotalDist(wholeRoute[3])]]
}

//スタートとゴールを含めたルートを返す
const makeWholeroute = (start, routeArr, goal, location) => {

    let wholeRoute = [];
    for (let i = 0; i < 4; i++) {
        let arr = [];
        arr.push(start);
        for (let elm of routeArr[i]) {
            arr.push(location[elm]);
        }
        arr.push(goal);
        wholeRoute.push(arr);
    }
    return wholeRoute;
}

//トータル距離を求める関数
const calcTotalDist = (locArr) => {

    let distance = 0;
    for (let i = 0; i < locArr.length - 2; i++) {
        distance += calcTwoPoint(locArr[i], locArr[i + 1])
    }
    return distance;
}

//2点間距離の導出
const calcTwoPoint = (point1, point2) => {
    return Math.sqrt((point1[1] - point2[1]) ** 2 + (point1[2] - point2[2]) ** 2)
}

module.exports = { calcTotalDist, calcDistnceArr };