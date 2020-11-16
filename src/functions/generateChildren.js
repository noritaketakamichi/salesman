
//子供の作成
//http://samuiui.com/2019/10/27/python%E3%81%A7%E9%81%BA%E4%BC%9D%E7%9A%84%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%EF%BC%88ga%EF%BC%89%E3%82%92%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%A6%E5%B7%A1%E5%9B%9E%E3%82%BB%E3%83%BC/
const generateChildren = (SelectedRoutes) => {

    const father=SelectedRoutes[0][0];
    const mother=SelectedRoutes[1][0];
    console.log(father);
    console.log(mother);

    //区切り位置の決定(0-末尾)
    const rand = Math.floor(Math.random()*(father.length));
    console.log(rand);
    const children = partialCrossing(father,mother,rand);

    console.log(father);
    console.log(mother);
    console.log(children);

    return children;

};

//部分的交叉
const partialCrossing=(father,mother,rand)=>{
    for(let i=rand;i<father.length-1;i++){
        if(father[i]!==mother[i]){
            const exfather=JSON.parse(JSON.stringify(father))
            const exmother=JSON.parse(JSON.stringify(mother))
            //選択位置での父母の値が違った場合、入れ替え
            father=exchange(father,i,exmother[i]);
            mother=exchange(mother,i,exfather[i]);
        }
    }
    return [father,mother]
}

//入れ替え
const exchange=(arr,pos,yourNum)=>{
    //選択位置の数字
    const myNum=arr[pos];

    //相手の数字の位置
    const yourNumPos = arr.indexOf(yourNum);

    //数字の入れ替え(posとyourNumPos)

    arr[pos]=yourNum;
    arr[yourNumPos]=myNum;

    return arr;

}


module.exports = { generateChildren };

