function getMiddle(s){
    /*if (s.length % 2 == 0){
        return `${s[s.length/2 - 1]}${s[s.length/2]}`;
    } else {
        return `${s[parseInt(s.length/2)]}`;
    }*/
    return s.slice((s.length-1)/2, s.length/2+1) + s.length;
    
}
console.log(getMiddle('casa'));