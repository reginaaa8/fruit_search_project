const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


// filter fruit array. Added .toLowerCase() to str and the array value so that search will not be case sensitive.
function search(str) {
	return fruit.filter((val) => {
		return val.toLowerCase().includes(str.toLowerCase());

	});

}
// function to run on keyup event 
function searchHandler(e) {
	// create an li from each element in the search results array. 
	// only "run" if there is input in the search box - if array is empty, function will run w empty array input and return no results. 
	if (!input.value) {
		showSuggestions([])
	}
	if (input.value) {
		searchResults = search(input.value);
		showSuggestions(searchResults);
	};
}

// show suggestion list 
function showSuggestions(searchResults) {
	// clear suggestion on each keyup to update list to return current result
	suggestions.replaceChildren();
	// create results list from results array
	searchResults.map(result => {
		const li = document.createElement("li");
		li.innerText = result;
		suggestions.appendChild(li);
	});

}

function useSuggestion(e) {
	// make sure function only runs if an li is selected
	// replace input with selected li text
	if (e.target = "li") {
		input.value = e.target.innerText;
		//clear suggestion list once you select li text
		suggestions.replaceChildren();
	}
}

// Event listener for key strokes
input.addEventListener('keyup', searchHandler);
// event listener to put selected suggestiion in input 
suggestions.addEventListener('click', useSuggestion);