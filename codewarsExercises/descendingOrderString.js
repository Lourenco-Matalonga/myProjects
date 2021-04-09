function descendingOrder(n){
    //...
   let x = Array.from(`${n}`).sort((a,b) => b - a).join('');
   return x
    
}

console.log(descendingOrder(45537));