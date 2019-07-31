const removeFromArray = function(...args) {
    let array = args[0];
    let reducedArray = [];

    array.forEach((element) => {

        if (!args.includes(element)) {
            reducedArray.push(element);
        }

    });

    return reducedArray;
}

console.log (
removeFromArray([1,2,3,4], 2, 1)

)
