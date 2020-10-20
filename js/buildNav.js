//Not positive yet how to combine both buildIndex and buildNav since the only difference is px and em.
const ol = document.getElementById("index");
let newTotal = 6;
let tabColor = 43;
for (const item of links) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.textContent = item.label;
	a.setAttribute("href", item.url);
	li.appendChild(a);
	li.setAttribute(
		"style",
		`top:${newTotal}em;background-color:#1f28${tabColor};`
	);
	newTotal += 2;
	tabColor === 93 ? (tabColor = 63) : (tabColor += 10);
	ol.appendChild(li);
}
