const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const ul = document.querySelector('ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



const srch = function search(str) {
	return fruit.filter(function(word) {
		return word.toLowerCase().includes(str.toLowerCase());
	})
}

// for event listener
function searchHandler() {
	ul.innerHTML = '';
	let inputVal = input.value;
	let callSrch = srch(inputVal);
	console.log(callSrch);
	for (result of callSrch) {
		const suggestedItems = document.createElement("li");	
		suggestedItems.textContent = result;
		suggestedItems.classList.add('suggestion');
		ul.append(suggestedItems)
	}
}
	



function useSuggestion(e) {
	if(e.target.tagName === 'LI') {
		input.value = e.target.textContent;
	}
	ul.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);