//どっちもルーレット選択
//残す遺伝子の選択
//一番距離が短いやつは必ず残す
//残りの3つから1つをルーレット選択
const selection = (arr) => {

    // console.log("hello");

    //距離の配列
    const distArr = [arr[0][1], arr[1][1], arr[2][1], arr[3][1]];

    //確率の配列
    const probArr1 = getProbFromDist(distArr);
    let sum1 = 0;

    probArr1.forEach((elm) => {
        sum1 += elm;
    })

    const rand1 = sum1 * Math.random();

    //4つの中からルーレット選択
    const firstChoiceNum = pickOneOfFour(probArr1, rand1);
    // console.log(firstChoiceNum);
    const firstChoice = arr[firstChoiceNum];

    // console.log("firstChoiceNum:",firstChoiceNum);
    // console.log("firstChoice:",firstChoice);

    //選択された要素を削除
    arr.splice(firstChoiceNum, 1);

    //距離の配列（要素は3つ）
    const distArr2 = [arr[0][1], arr[1][1], arr[2][1]];

    //確率の配列
    const probArr2 = getProbFromDist(distArr2);
    let sum2 = 0;

    probArr2.forEach((elm) => {
        sum2 += elm;
    })
    const rand2 = sum2 * Math.random();

    //3つの中からルーレット選択
    const secondChoiceNum = pickOneOfThree(probArr2, rand2);
    const secondChoice = arr[secondChoiceNum];

    return [firstChoice, secondChoice]

};

//距離の配列の各要素の逆数から確率の配列を導出する関数
const getProbFromDist = (arr) => {
    //各要素を逆数に変換
    arr.forEach(elm => 1 / elm);

    //配列の値の合計値
    const sumInvArr = arr.reduce((a, x) => a + x);

    //確率の配列
    arr.forEach(elm => elm / sumInvArr);

    return arr;
}

//4つから1つを選ぶ関数
const pickOneOfFour = (probArr, rand) => {
    if (rand <= probArr[0]) {
        return 0;
    } else if (rand <= probArr[0] + probArr[1]) {
        return 1;
    } else if (rand <= probArr[0] + probArr[2]) {
        return 2;
    } else {
        return 3;
    }
}

//3つから1つを選ぶ関数
const pickOneOfThree = (probArr, rand1) => {
    if (rand1 <= probArr[0]) {
        return 0;
    } else if (rand1 <= probArr[0] + probArr[1]) {
        return 1;
    } else {
        return 2;
    }
}

module.exports = { selection };

