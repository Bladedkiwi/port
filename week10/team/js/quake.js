//similar to hike app that had a list at the top of model - this here is in the form of getJson
import { fetchTheBall } from "./utilities.js";
//Quake Model
export default class Quake {
	constructor() {
		this.baseURL =
			"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02";
		// this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
		this._quakes = [];
	}
	async getEarthQuakesByRadius(position, radius = 700) {
        // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
        //my position has no quakes - used the assignment's numbers - originally had position.lat and position.lon
        const query = `${this.baseURL}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
        this._quakes = await fetchTheBall(query);
		return this._quakes;
	}
	getQuakeById(id) {
		// filter this._quakes for the record identified by id and return it
		return this._quakes.features.filter((item) => item.id === id)[0];
	}
}
