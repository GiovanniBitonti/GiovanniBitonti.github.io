const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if(inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span'); //creating the remove button next to each todos
        span.innerHTML = "\u00d7"; // just a code to the create the "X"
        li.appendChild(span); 
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data in the local storage.

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
