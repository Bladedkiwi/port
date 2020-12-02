//Our built-in server on port 3000
const baseURL = "http://localhost:3000/";
//fetch's data that needs extra options like headers, tokens, etc.
export async function makeRequest(
	url,
	method = "GET",
	body = null,
	token = null
) {
	//customizing the options
	let options = {
		method: method,
		/*
		We didn't really think about this part, did we? options.headers inside the options object. Oops. 
		Lessons learned, authorization is part of a possible headers designation. Technically, we could set it in headers, but not if we want it to be dependent on if there is a token.
		*
		token: {
			//Only gets used if there's a token
			if(token) {
        //sets the authorization to be the token
				options.headers.Authorization = `Bearer ${token}`;
			},
		},
		*/
		headers: {
			"Content-Type": "application/json"
		},
	};
	if (method == "POST" || method == "PUT") {
		//data gets turned into a string
		options.body = JSON.stringify(body);
	}
	if (token) {
		//authorization is defined as the <type> then <credentials>
		options.headers.Authorization = `Bearer ${token}`;
	}
	//uses options above to set fetch
	const response = await fetch(baseURL + url, options);
	//prepare data to be returned
	const data = response.json();
	//display error message if needed
	if (!response.ok) {
		console.log(response);
		throw new Error(`${data.status}: ${data.message}`);
	} else return data;

	// not catching the error here...so we will need to catch it later on and handle it.
}
