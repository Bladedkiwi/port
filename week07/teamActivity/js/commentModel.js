export default class CommentModel {
    constructor() {
        this.hikeTypes = ['type1', 'type2', 'type3'];
        this.date = new Date();      
    }
    getComment(name, comment) {
        //lays out the new comment and returns
        return `<article class="comment"><h2>${name}</h2><small>${this.date.toLocaleString()}</small><p>${comment}</p></article>`;
    }
    getDefaultComment() {
        return `<p>There are no comments at this time for your review. Please feel free to leave one.</p>`;
    }
} 
            