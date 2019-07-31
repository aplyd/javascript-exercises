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

module.exports = removeFromArray
