function arraySum(arr) {
    for(let item of arr) {
        let reqNumber = 10 - item;
        if(arr.indexOf(reqNumber) !== -1){
            return [item, reqNumber]
        }
    }
}

module.exports = arraySum;
