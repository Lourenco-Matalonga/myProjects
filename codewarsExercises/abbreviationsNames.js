function abbrevName(name){
    let x = String(name).split(' ');
    let first = x[0];
    let last = x[1];
    return `${first.substr(0,1)}.${last.substr(0,1)}`
      
  
}
console.log(abbrevName('John Smith'));
