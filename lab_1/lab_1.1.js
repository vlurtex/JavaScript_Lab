'use strict';
let age = prompt("Введите возраст: ")
let gender = prompt("Введите пол(м/ж): ")
if (age < 18) {
   alert('Вам рано работать - учитесь')
}
else if ((age < 60 && age > 17 && gender == 'м') | (age < 55 && age > 17 && gender == 'ж')) { alert('Вам еще работать и работать') }
else if ((age < 65 && age > 59 && gender == "м") | (age > 54 && age < 60 && gender == 'ж')) { alert("Скоро пенсия") }
else if ((age > 65 && gender == "м") | (age >= 60 && gender == 'ж')) { alert('Вам пора на пенсию') }
else { alert("Да кто ты такой?") }
