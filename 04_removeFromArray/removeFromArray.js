const removeFromArray = function() {
    let arrayList = arguments[0];
    let newArray = [];

    for(let i = 0; i < arrayList.length; i++){
        let shouldRemove = false;
        for(let j = 1; j < arguments.length; j++){
            if(arrayList[i] === arguments[j]){
                shouldRemove = true;
                break;
            }
        }
        if(!shouldRemove){
            newArray.push(arrayList[i]);
        }

    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
