function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return []
    } else {
        let x = input.filter(value => value > 0).length;
        let y = input.filter(value => value < 0).reduce((a,b)=> a+b);
        return [x, y];
    }
}  
    
    

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));