const removeFromArray = function(arr, x) {
    let reducedArr = [];
    
        for (i = 0; i < Array.from(arguments).length; i++) {
            console.log('hi')
            /*for (j = 0; j < arr.length; j++) {
                if (arr[j] !== arguments[j]) {
                    reducedArr.push(arr[j]);
                }
            }*/
        }
    return reducedArr;
}

console.log (
removeFromArray([1,2,3,4], 2, 1, 5, 7, 8)
)
