String.prototype.isUpperCase = function() {
    // your code here
   return this == this.toUpperCase() ? true : false;
    
}

console.log('HELLO world'.isUpperCase());