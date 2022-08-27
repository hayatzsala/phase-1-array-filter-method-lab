// Code your solution here
function findMatching(arr,name){
    return arr.filter((element)=>{
        return element.toUpperCase() === name.toUpperCase();
    })
}
function fuzzyMatch(arr,nameStart){
    return arr.filter((element)=> {
        return element.startsWith(nameStart);
    })
}

function matchName(arr, name){
    return arr.filter((element)=>{
        return element.name === name;
    })
}