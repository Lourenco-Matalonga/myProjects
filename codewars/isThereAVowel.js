let a = [101, 103, 222, 97, 105];

var i = 0;
a.forEach(function(v){
  v == 97 || v == 101 || v == 105 || v==111 || v ==117 ? a[i++] = String .fromCharCode(v) : a[i++] = v;
}),a;
console.log(a);
  /*
arr.forEach(callback(currentValue[, index[, array]]) {
  // execute something
}[, thisArg]);

callback
Function to execute on each element. It accepts between one and three arguments:
currentValue
The current element being processed in the array.
index Optional
The index of currentValue in the array.
array Optional
The array forEach() was called upon.
thisArg Optional
Value to use as this when executing callback.
*/

/* The conditional (ternary) operator is the only JavaScript operator that takes three operands:
 a condition followed by a question mark (?),
then an expression to execute if the condition is truthy followed by a colon (:),
and finally the expression to execute if the condition is falsy. 
This operator is frequently used as a shortcut for the if statement.
*/

/*
function isVow(a){
    var i = 0
    a.forEach(function(v){
      v == 97 || v == 101 || v == 105 || v == 111 || v == 117 ? a[i++] = String .fromCharCode(v) : a[i++] = v
    });
  return a
} 
  
  
  
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
*/



    
