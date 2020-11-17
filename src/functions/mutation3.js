const { generateRandomArr } = require("./generateArr");

//0.5%の確率で突然変異
//引数は4つのルート
const mutation = (arr) => {
    const probability = 10;
    const firstPercent = Math.random() * 100;

    if (firstPercent <= probability) {
        const rand = Math.random();

        //50%の確率で完全なランダム
        if (rand <= 0.5) {
            return JSON.parse(JSON.stringify(generateRandomArr(arr)));
        }


        //突然変異
        //4つ目の配列を突然変異させる
        const afterArr = exchange(arr);

        const secondPercent = Math.random() * 100;

        //稀に2つ入れ替えを起こす
        if (secondPercent <= probability) {
            return exchange(afterArr);
        } else {
            return afterArr;
        }

    } else {
        //突然変異じゃなければそのまま返す
        return arr;
    }
}

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

    //入れ替え
    let tmp = arr[firstNum];
    arr[firstNum] = arr[secondNum];
    arr[secondNum] = tmp;

    return arr;
}

module.exports = { mutation };