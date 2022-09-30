function pow(x, n) {
   let result = x;

   result = x ** n;

   return result;
}

let x = prompt("Введите х ");
let n = prompt("Введите n ");

alert(pow(x, n))