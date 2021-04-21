function index(array, n) {
    //your code here
    if (typeof array[n] == 'undefined') {
        return -1;
    } else {
        return array[n] ** n;
    }
}
console.log(index([1, 4, 6, 6, 8], 3));