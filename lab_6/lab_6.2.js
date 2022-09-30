const button = document.querySelector('span')
const menu = document.querySelector('ul')

button.addEventListener('click', open_menu)

function open_menu() {
   if (menu.style.opacity == '0') {
      menu.style.opacity = '1'
   }
   else menu.style.opacity = '0'
}
