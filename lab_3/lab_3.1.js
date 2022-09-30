function getDecimal(num) {
   let str = "" + num;
   let zeroPos = str.indexOf(".");
   if (zeroPos == -1) return 0;
   str = str.slice(zeroPos);
   return +str;
}
let num = prompt("Введите num: ")
alert(getDecimal(num))