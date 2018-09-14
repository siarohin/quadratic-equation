module.exports = function solveEquation(equation) {
  // your implementation
  // a*x^2 + b*x + c = 0
  // 
  // d = b^2 - 4a*c
  //
  // if d > 0 {                            // +++ 2 корня
  //	x1 = (-b + sqrt d) / 2 * a
  //    x2 = (-b - sqrt d) / 2 * a
  // 
  //  ********************************************************************
  //
  // if d = 0                             // --- 1 корень
  //    x = -b / 2 * a
  //
  // id d < 0                             // --- Нет корней
  //    
  //
  // !! *Each* equality has exact 2 *integer* solutions. Return those numbers as ordered array.

  //
  // 294 * x^2 - 141195558 * x - 1600964090384736   // equation
  // [294,*,x^2;-;141195558;*;x;-;1600964090384736] // equation split

  var array = equation.split(' '); 

  var a = +(array[0]);
  var b = +(array[3] + array[4]);
  var c = +(array[7] + array[8]);

  var d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    // Два корня
    var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  } else if (d < 0) {
    // Нет корней
  } else {
    var x1 = Math.round(-b / (2 * a));
    var x2 = x1;
  }

  if (x1 < x2) {
    var sort = [x1, x2];
  }
  else {
    var sort = [x2, x1];
  }

  return sort;
  
}
