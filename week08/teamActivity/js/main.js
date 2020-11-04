/*

`<article class="page__card">
<h3>Title</h3>
<ul><li>Special Attributes</li></ul>
<p></p>
</article>`

TODO:
1. get fetch returning to console **CHECK**
2. grab the rest of of fetch pages  **CHECK**
3. loop through array, and display data **CHECK**
4. style the page
5. add event listeners for displaying the rest of the data, and do onscroll
*/

const people = [];
const endpoint = "https://swapi.dev/api/people/";

/*
fetch(endpoint)
	.then((blob) => {
		return blob.json();
	})
	.then((data) => {
		console.log(data.next);
		//people.push(...data.results))
	})
	.catch((err) => {
		console.log(err);
	});
*/
/*
function displayPeople() {
    let output = document.getElementById("output");
    output.innerHTML += `<h2>People</h2>`;
    for (person in people) {
        output.innerHTML += ` 
    <article class="page__card">
        <h3>${person.name}</h3>
        <ul>
            <li>Gender: ${person.gender}</li>
            <li>Birth Year: ${person.birth_year} </li>
            <li>Eye Color: ${person.eye_color} </li>
            <li>Hair Color: ${person.hair_color} </li>
            <li>URL: <a href="${person.url}">More info on ${person.name}</a></li>
        </ul>
    </article>`;
    }
}
*/

function fetchAPI(endpoint) {
	fetch(endpoint)
		.then((blob) => {
			return blob.json();
		})
		.then((data) => {
			//console.log(data);
			people.push(...data.results);
			endpoint = data.next;
			//base case
			if (endpoint != null && endpoint != "") {
				fetchAPI(endpoint);
			}
		})
		.then(displayPeople);
}
fetchAPI(endpoint);
//console.log(people);

function displayPeople() {
	//console.log(people);
	/*
    Questions of the Day: 
    -Why does map work? 
    -Why does for (person in people) only give the key, and no access to the rest of the object?
    */
	let item = people
		.map((person) => {
			return ` 
        <article class="page__card">
            <h3>${person.name}</h3>
            <ul>
                <li>Gender: ${person.gender}</li>
                <li>Birth Year: ${person.birth_year} </li>
                <li>Eye Color: ${person.eye_color} </li>
                <li>Hair Color: ${person.hair_color} </li>
                <li>URL: <a href="${person.url}">More info on ${person.name}</a></li>
            </ul>
        </article>`;
		})
		.join("");
	testing.innerHTML = item;
}

const testing = document.querySelector(".page");
//people.forEach((person) => console.log(person));
