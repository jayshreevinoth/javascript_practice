//Using set
function removeDuplicate(arr){
    let uniquesArr = [...new Set(arr)];
    return uniquesArr;
}

//Using filter and indexOf
function removeDuplicate(arr){
    let uniquesArr = arr.filter((element,index) => {
        return arr.indexOf(element) === index;
    });
    return uniquesArr;
}

//Using incudes and forEach
function removeDuplicate(arr){
    let uniquesArr = [];
    arr.forEach((element,index) => {
        if(!uniquesArr.includes(element)){
            uniquesArr.push(element);
        } 
    });
    return uniquesArr;
}