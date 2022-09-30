function fib(n){
        if (n<2){
            return n;
        }else{
            return bigInt(fib(n-1)+fib(n-2));
        } 
    }
let n = prompt("Введите n: ")
alert(fib(n))
