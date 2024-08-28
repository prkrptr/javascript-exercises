const reverseString = function(str) {
    let revStr = '';

    for(let i = 0; i < str.length; i++){
        revStr =  revStr.concat(str[str.length-i-1]);
    }

    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
