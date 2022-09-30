let selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value, selectedOption.text);
let newOption = new Option("Классика", "classic");
genres.append(newOption);
newOption.selected = true;