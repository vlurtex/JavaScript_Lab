function factorial(n) {
   let result = 1;
   while (n) {
      result *= n--;
   }
   return result;
}
let n = prompt("Введите n: ")
alert(factorial(n))