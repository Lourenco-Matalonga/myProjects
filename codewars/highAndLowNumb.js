function highAndLow(numbers){
    // ...
    let newArr = numbers.split(" ").map(Number).sort((a,b) => b - a); //.map() turns each value in the array into a Integer/Number

    return `${Math.max(...newArr)} ${Math.min(...newArr)}`;
}
console.log(highAndLow('1 -2 3 45 345 -445 8909'));