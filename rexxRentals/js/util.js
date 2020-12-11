export {activateMenu,toggleShow, fetchJson};

//slides nav, or changes window location
function activateMenu() {
	//check which btn was clicked and change width
	if (this.className.includes("close")) {
		nav.style.width == "100%"
			? (nav.style.width = "0%")
			: (nav.style.width = "0%");
	} else if (this.id.includes("rent")) {
		window.location = `${this.dataSet.src}`;
	} else if (this.id.includes("about")) {
		window.location = "/about.html";
	} else {
		nav.style.width = "100%";
	}
}
//toggle's display property of child element
function toggleShow() {
	let item = this.children[1];
	//if item hasn't been defined -
	//define it block, or if item is defined as none define it block
	//if item is defined as "block" define it none
	item.style.display === "" || item.style.display === "none"
		? (item.style.display = "block")
		: (item.style.display = "none");
}
async function fetchJson() {
    const endpoint =
        "https://bladedkiwi.github.io/port/rexxRentals/rexx-rentalsInfo.json";
    const response = await fetch(endpoint.response);
    await console.log(response.json());
    // const jsonData = await fetch(() => {
    //     endpoint.blob().then(() => {
    //         return endpoint.json();
    //     });
    // });
    // return jsonData;
    //const data = await fetch(endpoint.blob());
    //const jsonData = await data.json();
}
