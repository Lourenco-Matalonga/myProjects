function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
   let sum = 0
   for (let i=0;i<marks.length;i++){
       sum = sum + marks[i];
   }
   return Math.floor(sum/marks.length);
} 

console.log(getAverage([2, 4 ,2 , 4])); 