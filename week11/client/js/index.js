import * as authHelp from './authHelpers.js';
import Auth from './auth.js';

//testPerson fetch's the token for the base user/pass, data that's returned is the promised token
//const testPerson = authHelp.makeRequest('login', 'POST', {
//    password: 'user1',
//    email: 'user1@email.com'
//});

const auth1 = new Auth();
const form = document.forms[0];
function stopSubmit(event) {
    auth1.login(event);
    event.preventDefault();
}
form.addEventListener('submit', stopSubmit)
const formBtn = document.querySelector('#submit');
formBtn.addEventListener('submit', event => {
    auth1.login(event); 
    event.preventDefault();
});
