// business logic
var sideA="a";
var sideB="b";
var sideC="c"
var firstSide=prompt("Input your first side in cm");
var secondSide=prompt("Input your second side in cm");
var thirdSide=prompt("Input your third side in cm")
if(firstSide==secondSide && secondSide==thirdSide){
  alert("This is an Equilateral Triangle");
}
else if (firstSide!==secondSide && secondSide!==thirdSide) {
  alert("This is a Scalene Triangle");
}
else if (firstSide==secondSide && secondSide!==thirdSide || firstSide!==secondSide && secondSide==thirdSide || firstSide==thirdSide && thirdSide!==secondSide) {
  alert("This is an Isosceles Triangle");
}
