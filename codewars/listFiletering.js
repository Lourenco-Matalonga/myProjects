function filter_list(l) {
    // Return a new array with the strings filtered out
    let filtered = l.filter(value => typeof value != 'string');
 return filtered
}

console.log(filter_list([1,2,'aasf','1','123',123]));
