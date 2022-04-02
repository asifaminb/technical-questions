// given two strings S and T , return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace
// ab#c and az#c -> both are equal to ac because # counts as a backspace and delete b and z respectively

function stringEqual(arr) {
    for(let item of arr) {
        let reqNumber = 10 - item;
        if(arr.indexOf(reqNumber) !== -1){
            return [item, reqNumber]
        }
    }
}

module.exports = stringEqual;
