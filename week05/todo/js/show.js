function toggleTask(e) {
    if (e.target.checked) {
        if (e.target.className == "finished");
        console.log(e.target);
        console.log(e.target.className);
        
        
    }
}






const tasks = Array.from(document.querySelectorAll('.list__task'));
console.log(tasks);
tasks.forEach(task => task.addEventListener('change', e => toggleTask(e)));