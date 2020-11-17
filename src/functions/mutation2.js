const { generateRandomArr } = require("./generateArr");

//0.5%の確率で突然変異
//引数は4つのルート
const mutation = (arr) => {
    return JSON.parse(JSON.stringify(generateRandomArr(arr)))
}

module.exports = { mutation };