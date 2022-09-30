function fib(n) {
   let a = 1n;
   let b = 1n;
   for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
   }
   return b;
}
let n = prompt("Введите n: ")
alert(bigInt(fib(n)))
