export default class HikesView {
    constructor(listElementId) {
        this.imageBasePath = '//byui-cit.github.io/cit261/examples/';
    }
    renderHikeList(hikeList, listElement) {
        for (const hike of hikeList) {
            listElement.innerHTML += `<li><h2>${hike.name}</h2>
            <div class="image">
            <img src="${this.imageBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
            </div>
            <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
            </div>
            <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
            </div>
            <div>
            <h3>Directions</h3>
            <p>${hike.directions}</p>
            </div></li>`;
            
        }
        return listElement;
    }

    renderLightHikeList(hikeList, listElement) {
        for (const hike of hikeList) {
            listElement.innerHTML += `<li><h2>${hike.name}</h2>
            <div class="image">
            <img src="${this.imageBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
            </div>
            <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
            </div></li>`;
        }
        return listElement;
    }
    renderExpandedHike(hike, parentElement) { //parentElement is the li item that we are attaching the added info to
        parentElement.innerHTML += `<div>
        <h3>Description</h3>
        <p>${hike.description}</p>
        </div>
        <div>
        <h3>Directions</h3>
        <p>${hike.directions}</p>
        </div>`;
        return parentElement;
    }
}