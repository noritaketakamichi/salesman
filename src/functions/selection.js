
//残す遺伝子の選択
//一番距離が短いやつは必ず残す
//残りの3つから1つをルーレット選択
const selection = (arr) => {

    // console.log("arr:",JSON.stringify(arr));

    //距離の配列
    const distArr = [arr[0][1], arr[1][1], arr[2][1], arr[3][1]];

    // console.log("distArr:",distArr);

    //4つの中からエリート選択
    const firstChoiceNum = pickOneOfFour(distArr);
    const firstChoice = arr[firstChoiceNum];

    // console.log("firstChoiceNum:",firstChoiceNum);
    // console.log("firstChoice:",firstChoice);

    //選択された要素を削除
    arr.splice(firstChoiceNum, 1);

    //距離の配列（要素は3つ）
    const distArr2 = [arr[0][1], arr[1][1], arr[2][1]];

    //確率の配列
    const probArr2 = getProbFromDist(distArr2);
    const rand2 = Math.random();

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
const pickOneOfFour = (arr) => {
    //返す値
    let num = 0;

    let minDist = arr[0]

    if (arr[1] < minDist) {
        num = 1;
        minDist = arr[1];
    }
    if (arr[2] < minDist) {
        num = 2;
        minDist = arr[2];
    }
    if (arr[3] < minDist) {
        num = 3;
        minDist = arr[3];
    }

    return num;
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

