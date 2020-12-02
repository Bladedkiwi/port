"use strict";
const create = React.createElement;

class ShoppingList extends React.Component {
	render() {
		//returns what we want rendered or displayed
		//notice the use of className instead of class
        //also, props is short for properties - so shopping list properties
        //the ul is created with nested li elements, and grouped together in a similar fashion
		return create(
			"div",
			{ className: "shopping-list" },
			create("h1", null, "Shopping List for ", props.name),
			create(
				"ul",null,
				create("li", null, "Cookies"),
				create("li", null, "Bread"),
				create("li", null, "Milk")
			)
		);
	}
}
function wrap() {
    return create('div', new ShoppingList(name="Peter Pan"));
}
const desiredContainer = document.querySelector(".shopping");
//React.DOM is similar to saying innerHTML =
ReactDOM.render(wrap(), desiredContainer);
