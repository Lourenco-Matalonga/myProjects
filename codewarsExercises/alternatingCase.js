String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split('').map(item => item === item.toUpperCase()? item.toLowerCase() : item.toUpperCase()).join('');
    
}

console.log('HELLO WORLD'.toAlternatingCase());