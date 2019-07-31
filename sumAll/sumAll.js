const sumAll = function(a, b) {
    let total = 0;
    let min = a;
    let max = b;

    if (min < 0 || max < 0) {
        total = 'ERROR';

    } else if (typeof min !== 'number' || typeof max !== 'number') {
        total = 'ERROR';
    }
        else if (min < max) {

        for (i = min; min <= max; min++) {
        total += min;
        }

    } else if (min > max) {

        for (i = max; max <= min; max++) {
            total += max;
        }
    
    } else {
        total = 'ERROR'
    }
        
    return total;
}

module.exports = sumAll
