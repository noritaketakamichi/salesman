const genetateInitialArr=(location)=>{
    return [
        JSON.parse(JSON.stringify(generateRandomArr(location))),
        JSON.parse(JSON.stringify(generateRandomArr(location))),
        JSON.parse(JSON.stringify(generateRandomArr(location))),
        JSON.parse(JSON.stringify(generateRandomArr(location)))
    ]
}

const generateRandomArr = (location) => {
    let numArr=[]
    for(let i=0;i<location.length;i++){
        numArr.push(i)
    }

    //ランダムに並び換え
    numArr.sort(function () {
        return Math.random() - 0.5;
    });

    return numArr;
};

// const addStartEnd=(arr)=>{
//     arr.unshift(tokyo);
//     arr.push(tokyo);
// }

module.exports = { generateRandomArr ,genetateInitialArr};

