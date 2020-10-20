//creates list of links dynamically
//select ol
//create and read array of links by
//Looping through array items
//creating li element, and a element including the label and url from array
//append data to li
//append li to ol

const ol = document.getElementById("index");
let newTotal = 20;
let tabColor = 43;
for (const item of links) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.textContent = item.label;
	a.setAttribute("href", item.url);
	li.appendChild(a);
	li.setAttribute(
		"style",
		`top:${newTotal}px;background-color:#1f28${tabColor};`
	);
	newTotal += 20;
	tabColor === 93 ? (tabColor = 63) : (tabColor += 10);
	ol.appendChild(li);
}
