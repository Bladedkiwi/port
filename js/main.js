//creates list of links dynamically
//select ol
//create and read array of links by
//Looping through array items
//creating li element, and a element including the label and url from array
//append data to li
//append li to ol
let ol = document.getElementById('index');
for (let item of links) {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.textContent = item.label;
		a.setAttribute('href', item.url);
		li.appendChild(a);
		ol.appendChild(li);
}