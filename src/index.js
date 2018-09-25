module.exports = function solveEquation(equation) {

  arr = equation.split(' '); 
  const a = +(arr[0]), 
        b = +(arr[3] + arr[4]),
        c = +(arr[7] + arr[8]),
  
  discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant > 0) {
      firstSolution = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
      secondSolution = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));

//  } else if (discriminant < 0) {
//      console.log('This task has no solutions!');

  } else {
      firstSolution = secondSolution = Math.round(-b / (2 * a));

  }

  return firstSolution < secondSolution ? sort = [firstSolution, secondSolution] : sort = [secondSolution, firstSolution];
  
}
