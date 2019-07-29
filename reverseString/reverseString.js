const reverseString = function(str) {
    let arr = str.split('');
    let reversedString = '';

    for (i = 0; i < str.length; i++) {
        reversedString += arr.pop();
    }
    return reversedString;
}

module.exports = reverseString
