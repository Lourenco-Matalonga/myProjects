function digitize(n) {
      let array1 = Array.from(String(n)).map(Number).reverse(); // creates an array with each digit of n as string and then converts each one to number type
                                    // takes array1 and reverses the order of the array. 0 to last, 1 to second last and so on
      return array1;
  }
  
  
  console.log(digitize(3456789));

