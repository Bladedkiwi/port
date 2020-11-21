export async function fetchTheBall(url) {
	const ball = await fetch(url)
		.then((dog) => {
			if (!dog.ok) {
				throw Error(dog.statusText);
			} else {
				return dog.json();
			}
		})
        .catch((error) => console.log(`Dog is blind: ${error}`));
    return ball;
}
export const getLocation = (options) => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
};
