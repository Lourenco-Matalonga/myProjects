function logicalCalc(array, op) {
    //your code here
    function andCalc(array){
      if(array.every((x) => x === true) || (array.every((x) => x === false))) {
        return array[0];
      } else {
        return false;
      }
      
    }

    function orCalc(array) {
      return array.reduce((x,y) => x === y ? x : true);
    }

    function xorCalc(array) {
      return array.reduce((x,y) => x !== y); //estudar
    }
    if (op === 'AND') {
      return andCalc(array);
    } else if (op === 'OR') {
      return orCalc(array);
    } else if (op === 'XOR') {
      return xorCalc(array);
    }
  }

console.log(logicalCalc([true, true, false, false], 'XOR'));
