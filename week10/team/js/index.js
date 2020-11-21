import * as fluffy from "./utilities.js";
import QuakesController from './quakesController.js';

const endpoint =
	"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";
fluffy.fetchTheBall(endpoint);

const quake = new QuakesController('#quakeList');
quake.init();
