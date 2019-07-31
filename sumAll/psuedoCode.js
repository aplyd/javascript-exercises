const sumAll = function(a, b) {
    let total = 0;
    let min = a;
    let max = b;

    /*
    switch (min, max) {
        case min < max:
            for (i = min; min <= max; min++) {
                total += min;
            }
            break;

        case min < max:
            for (i = max; max <= min; max++) {
                total += max;
            }
            break;

        case min < 0 || max < 0:
            total = 'ERROR';
            break;

        case typeof min !== 'number' || typeof max !== 'number':
            total = 'ERROR';
            break;
    } */

    
    if (min < max) {

        for (i = min; min <= max; min++) {
        
        total += min;
        }
    } else if (min > max) {
        for (i = max; max <= min; max++) {
            
            total += max;
        }
    } else if (min < 0 || max < 0) {
        total = 'ERROR';
    } else if (typeof min !== 'number' || typeof max !== 'number') {
        total = 'ERROR';
    } else {
        total = 'ERROR'
    }

    
        
    console.log(total);
    return total;
}



sumAll(2,4);
