const removeFromArray = function(arr, ...element) {

    newArray = [];
    arr.push(element)


    const index = arr.indexOf(3);
    if (index > -1 ){
        arr.splice(index, 1);
    }

    
};


// Do not edit below this line
module.exports = removeFromArray;
