function between(a, b) {
    // your code here
 return Array.from({length: (b - a) + 1}, (v, k) => a + k ); // Run a map function on said indexes using v(alue)[undefined] and k(ey)[0 to length]
                                                            // Return k(ey) as value for this index
}   
console.log(between(-4,-1));

/* other simpler solution
function between(a, b) {
  let arr = [];
  for (let i = 0; i < (b - a) + 1; i++) {
    arr[i] = a + i;
  }
  return arr;
}
*/
