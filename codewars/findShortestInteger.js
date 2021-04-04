function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length));
}

console.log(findShort("Heloo world of the"));