import CommentModel from "./commentModel.js";
import CommentView from "./commentView.js";

export default class CommentController {
    constructor(parentClass) {
        this.stored = getFromStorage('allComments');
        this.commentModel = new CommentModel();
        this.commentView = new CommentView();
        this.parent = document.querySelector(parentClass);
    }
    showAllComments() {
        //grabs from localStorage and displays
        //if no localStorage, display empty comment area/msg "There are no comments"

        if (this.stored == null) {
            //no comments and array is null
            this.commentView.renderDefaultComment(this.commentModel.getDefaultComment(), this.parent);
        }
        else {
            //display All comments
            this.commentView.renderAllComments(this.stored, this.parent);
        }
    }

    appendComment(e) {
        //on event: create comment, store/display comment
        //console.log(this);
        
        if (this.stored == null) {
            //create array if null
            this.stored = [];  
        }
        let name = document.querySelector('#name').value;
        let comment = document.querySelector('#inputComment').value;
        this.commentView.renderComment(this.commentModel.getComment(name, comment), this.stored, this.parent);
    }

    /*showMinifiedComments(){
        //grabs from localStorage?

    }*/
    
}