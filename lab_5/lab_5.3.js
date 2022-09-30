(function () {
   let li = document.querySelectorAll("li");
   for (let i = 0; i < li.length; i++) {
      let num = li[i].querySelectorAll("li").length;
      let name = li[i].firstChild.nodeValue.trim();
      console.log(`${name}: ${num}`);
   }
}());