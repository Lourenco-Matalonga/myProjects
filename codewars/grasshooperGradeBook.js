function getGrade (s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3
  return  avg < 60 ? "F" : avg < 70 ? "D" : avg < 80 ? "C" : avg < 90 ? "B" : "A";
}
console.log(getGrade(100, 60, 35));