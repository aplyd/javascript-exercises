const repeatString = function(str, amount) {
    let repeated = '';
    if (amount < 0) {
        return 'ERROR';
    } else {
        for(i = 0; i < amount; i++) {
        repeated += str;
        }
    }
    
    return repeated;
}

module.exports = repeatString
