function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'); //creates and array with each character and then for each character it turns first on
    // into uppercase and repeats it index number of times in lowercase and finally joins
}                                                                                             // each element of the array into a string separated by -
console.log(accum('sQrpst'));