function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  let sum = 0;
  for (let i = 0;i < arrayOfSheep.length;i++){
      if (arrayOfSheep[i] == true){
          sum++
        }
    } 
    return sum;
}

console.log(countSheeps([true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]));