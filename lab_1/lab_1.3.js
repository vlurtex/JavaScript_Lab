let n = prompt('Введите число')

for (let i = 2; i <= n; i++) {
   let x = 1;
   if (i > 2 && i % 2 != 0) {
      for (let j = 3; j * j <= i; j = j + 2) {
         if (i % j == 0) {
            x = 0;
            break;
         }
      }
   }
   else if (i != 2) x = 0;
   if (x == 1) { console.log(i); }
}