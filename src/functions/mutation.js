//0.5%の確率で突然変異
//引数は4つのルート
const mutation = (arr) => {
    const probability = 10;
    const percentTmp = Math.random() * 100;

    if (percentTmp <= probability) {
        //突然変異
        // console.log("object");

        //4つ目の配列を突然変異させる
        const afterArr=exchange(arr);

        return afterArr;
    } else {
        //突然変異じゃなければそのまま返す
        return arr;
    }
}
// for(let i=0;i<1000;i++){

//     mutation();
// }

//配列の要素を入れ替え
const exchange = (arr) => {
    const firstNum = Math.floor(Math.random() * arr.length);
    let flag = true;
    let secondNum;

    while (flag) {
        secondNum = Math.floor(Math.random() * arr.length);
        //二つの数字が異なっていればOK
        if (firstNum !== secondNum) {
            flag = false;
        }
    }

    // console.log(firstNum);
    // console.log(secondNum);

    //入れ替え
    let tmp = arr[firstNum];
    arr[firstNum] = arr[secondNum];
    arr[secondNum]=tmp;

    // console.log(arr);
    return arr;
}

module.exports = { mutation };