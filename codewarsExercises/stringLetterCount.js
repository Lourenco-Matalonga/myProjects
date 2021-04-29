function strCount(str, letter) {
    return str.split(letter).length - 1;
}
console.log(strCount('Hello', 'o'));

//Another solution
/*function strCount(str, letter){
    //code here
    let count = 0
    for (let i = 0; i < str.length; i++){
      if(str[i] == letter){
         count++;
      }
    }
    return count;
}
*/