/*
Template:
		`<article class="page__card">
			<h3>Title</h3>
			<ul>
				<li>Special Attributes</li>
			</ul>
		</article>`

TODO:
1. get fetch returning to console **CHECK**
2. grab the rest of of fetch pages  **CHECK**
3. loop through array, and display data **CHECK**
4. style the page
5. add event listeners for displaying the rest of the data, and do onscroll
*/

//const people = [];
const endpoint = "https://swapi.dev/api/people/";


const testing = document.querySelector(".page");

async function displayPeople(endpoint) {
	/*
	Questions we ran into: 
	-Why does map work instead of for (person in people)? Because it's not grabbing the object, only the key
	*/

	//call fetch, and wait for the promise to return, and return the json
	let data = await fetch(endpoint).then(blob => { return blob.json() });
	//data.results is where the people are
	people = data.results;
	//when we get the results, use those results to deal with each person
	let item = await people.map((person) => {
			return ` 
        <article class="page__card">
            <h3>${person.name}</h3>
            <ul>
                <li>Gender: ${person.gender}</li>
                <li>Birth Year: ${person.birth_year} </li>
				<li>Description: 
					<ul>
						<li>${person.skin_color}</li>
						<li>${person.eye_color} </li>
						<li>${person.hair_color} </li>
						<li>${person.mass} Kg</li>
						<li>${person.height} Cubits </li>
					</ul>
				</li>
            </ul>
		</article>`;
		})
		.join('');
	testing.innerHTML = `${item}`;

	/*Played with a closure function inside this one to handle the new pages, but no luck in getting it to work
	//closure function that defines new page call on event listener
	return function (e) {
		let pageByNum = endpoint + `?page=${e.target.textContent}`;
		displayPeople(pageByNum);
	}*/
}

displayPeople(endpoint);

//Utility functions below
function grabPage(e) {
	//grabs specific page on click
	let pageByNum = endpoint + `?page=${e.target.textContent}`;
	displayPeople(pageByNum);
}


//closure counter/document queryselector creator
function counter(start) {
	//starts the counter with first call
	let i = start;
	return function () {
		//increments counter on second call onwards
		return i++;
	}
}

function setOut() {
	//starts counter first call
	let num = counter(1);
	return function (item) {
		//returns the declaration of an item on page num() and sets event listener
		item = document.querySelector(`.pg${num()}`);
		item.addEventListener('click', grabPage);
		return item;
	}
}
//sets each button, and their event listener, zig zag defining out = 1, out1 = out(1), out2 = out(2) and so forth
const out = setOut();
let out1 = out(out);
let out2 = out(out1);
let out3 = out(out2);
let out4 = out(out3);
let out5 = out(out4);
let out6 = out(out5);
let out7 = out(out6);
let out8 = out(out7);
let out9 = out(out8);





/************The Rest is the journey to the code above
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

/*
function fetchAPI(endpoint) {
	fetch(endpoint)
		.then((blob) => {
			return blob.json();
		})
		.then((data) => {
			//console.log(data);
			people.push(...data.results);
			//change things up
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
//displayPeople()

//const testing = document.querySelector(".page");
//people.forEach((person) => console.log(person));
*/
