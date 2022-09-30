function showBook(obj) {
   console.log(obj.title, obj.price)
}
function isEmpty(obj) {
   for (let key in obj) {
      return console.log('False');
   }
   return console.log('True');
}

let book1 = {}
book1.title = 'Kniga';
book1.pubYear = '2003';
book1.price = '69$';

isEmpty(book1)

let book2 = {
   title: 'Kniga2',
   pubYear: '2005',
   price: '43$'
}
for (const property in book1) {
   console.log(`${property}: ${book1[property]}`)
}
for (const property in book2) {
   console.log(`${property}: ${book2[property]}`)
}
book1.show = () => showBook();
book2.show = () => showBook();
showBook(book1)
showBook(book2)

