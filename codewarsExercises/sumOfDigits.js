function sum(digits) {
   
    let array1 = Array.from(String(digits)).map(Number);
    if (array1.includes(NaN)== true){
        return ''
    } else {
         let sum = 0;
        for (let i = 0; i < array1.length; i++){
            sum = sum + array1[i];
        }
     return `${array1.join(' + ')} = ${sum}`;
    }
    //return array1;
}


console.log(sum('357'));