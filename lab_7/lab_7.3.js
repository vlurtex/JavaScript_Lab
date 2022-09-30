const placeholder = document.querySelector('.placeholder')
// const span = document.querySelector('span')

placeholder.addEventListener('click', focus)

function focus() {
   let thisElement = this;
   let savePlaceholder = this.getAttribute('placeholder');
   document.querySelector('span').style.opacity = '1';
   this.setAttribute('placeholder', ' ');
   document.addEventListener('mouseup', function () {
      thisElement.setAttribute('placeholder', savePlaceholder);
      document.querySelector('span').style.opacity = '0';
   })
}
