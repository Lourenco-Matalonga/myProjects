function doubleChar(str) {
    let doubleStr = '';
    for (let i = 0; i < str.length; i++){
      doubleStr = doubleStr + str[i] + str[i];
    }
    return doubleStr;
}
console.log(doubleChar('Hello'));


//Another solution
//return str.split('').map(v => v + v).join('');

//Another solution
//return str.replace(/./g, '$&$&');