// Requires: access to the makeRequest function
import { makeRequest } from "./authHelpers.js";
//Auth class which provides basic JWT(JSON Web Token) based authentication
export default class Auth {
	constructor() {
		this.jwtToken = "";
		this.user = {};
	}
	async login(callback) {
		//grabs the forms input fields, and their values
		const password = document.getElementById("password");
		const username = document.getElementById("username");
		const postData = {
			email: username.value,
			password: password.value,
		};
		try {
			/*
			//makeRequest needs a url to be passed to server
			//http://127.0.0.1:3000/ + credentials: ?username=lbs&password=hsdf
			*
			Above was sort of right, but we are addressing the login address of the server. 
			so: http://127.0.0.1:3000/login/ would be where we want to sent our "body" or login data to. 
			also want to use post, so our login data can't be bookmarked
			All requests to the server outside of the login address will be rejected without their proper token added
			*/
			const response = await makeRequest("login", "POST", postData);
			// 2. Stores designated token upon proper request
			//accessToken is seen after console logging response
			if (response) {
				this.jwtToken = response.accessToken;
			}

			//Step 3 - Show posts and user account info
			// you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
			//we create the credentials based off the username
			this.user = await this.getCurrentUser(username.value);
			document.querySelector(
				".notebook__note"
			).innerHTML += `
			<div class="note__content">
				<ul>
					<li>Username: ${this.user.username}</li>
					<li>Email: ${this.user.email}</li>
				</ul>
			</div>`;
			this.user = await this.getCurrentPosts();
			// hide the login form.
			document.getElementById("login").classList.add("hidden");
			// clear the password
			password.value = "";

			// since we have a token let's go grab some data from the API by executing the callback if one was passed in
			if (callback) {
				callback();
			}
		} catch (error) {
			// if there were any errors display them
			console.log(error);
		}
	}
	// uses the email of the currently logged in user to pull up the full user details for that user from the database
	async getCurrentUser(email) {
		try {
			// 3. add the code here to make a request for the user identified by email...don't forget to send the token!
			debugger;
			const userData = await makeRequest(
				`users?email=${email}`,
				"GET",
				email,
				this.jwtToken
			);
			return userData[0];

		} catch (error) {
			// if there were any errors display them
			console.log(error);
		}
	}
	async getCurrentPosts() {
		try {
			let posts = await makeRequest(
				'posts',
				'GET',
				null,
				this.jwtToken
			);
			posts.forEach(post => {
				let postArea = document.querySelector('.notebook__note');
				postArea.innerHTML += `
				<div class="note__content">
					<div>
						<h2>${post.title}</h2>
						<p>${post.content}</p>
					</div>
					<ul>
						<li>User: ${post.userId}</li>
						<li>${Date(post.createdAt)}</li>
					</ul>
				</div>
				`
			});
		}
		catch (error) {
			console.log(error);
		}
	}
	set token(value) {
		// we need this for the getter to work...but we don't want to allow setting the token through this.
	}
	get token() {
		return this.jwtToken;
	}
} // end auth class
