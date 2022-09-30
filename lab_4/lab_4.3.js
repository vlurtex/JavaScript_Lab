function getSecondsToday() {
   let now = new Date();

   // создаём объект с текущими днём/месяцем/годом
   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

   let diff = now - today; // разница в миллисекундах
   return Math.round(diff / 1000); // получаем секунды
}

alert(getSecondsToday());

function formatDate(date) {

   let dd = date.getDate();
   if (dd < 10) dd = '0' + dd;

   let mm = date.getMonth() + 1;
   if (mm < 10) mm = '0' + mm;

   let yy = date.getFullYear() % 100;
   if (yy < 10) yy = '0' + yy;

   return dd + '.' + mm + '.' + yy;
}
let d = new Date(2014, 0, 30);
alert(formatDate(d));
