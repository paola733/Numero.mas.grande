let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(cualEsMayor(num1, num2, num3));

function cualEsMayor(num1, num2, num3) {
  let mayor = 0;
  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num3) {
    mayor = num2;
  } else {
    mayor = num3;
  }
  return mayor;
}





