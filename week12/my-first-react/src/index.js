import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));

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
			create("h1", null, "Shopping List for ", this.props.name),
			create(
				"ul",null,
				create("li", null, "Cookies"),
				create("li", null, "Bread"),
				create("li", null, "Milk")
			)
		);
	}
}
const listName = <ShoppingList name="Peter Pan" />
const desiredContainer = document.querySelector(".shopping");
//React.DOM is similar to saying innerHTML =
ReactDOM.render(listName, desiredContainer);
