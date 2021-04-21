function removeEveryOther(arr){
    //your code here
    let newarr = [];
    for(let i = 0; i < arr.length; i+=2){
      newarr.push(arr[i]);
     
    }
    return newarr;
}
console.log(removeEveryOther([1, 4, 5, 2, 29, 33]))

//Another Solution
// return arr.filter(id => id % 2 === 0)