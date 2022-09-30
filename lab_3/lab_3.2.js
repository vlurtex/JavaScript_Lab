function ucFirst(str) {
   return str[0].toUpperCase() + str.slice(1);
}
let str = prompt("Введите строку: ")
alert(ucFirst(str))