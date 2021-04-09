function pow(base, power){
  result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result;
}



console.log(pow(4, 2));