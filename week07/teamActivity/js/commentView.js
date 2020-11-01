export default class CommentView {
    constructor (){
    
}
renderDefaultComment(comment, ul){
    //add to existing comments
    //console.log(comment);
    //console.log(parentElement);
    ul.innerHTML += comment;
}
renderComment(comment, list, ul) {
    if (ul.firstChild.nodeName == "P") {
        ul.firstChild.remove();
    }
    //console.log(comment);
    list.push(comment);
    ul.innerHTML += comment;
    saveToStorage('allComments', list);

}
renderAllComments(list, ul) {
    //iterates over list and displays from localStorage
    try {
        //for loops require variable declaration
        for (const item of list) { 
            ul.innerHTML += item;
    }
    } catch(err) {
        console.log(err.message);
    }
}
renderCommentType() {

}   

}