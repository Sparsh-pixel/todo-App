const inputBox = document.getElementById("input-box");
const listItem = document.getElementById("list-items");




// function to add task 
function addTask() {
    if (inputBox.value === '') {
        alert("Empty task cannot be added");  // alert when task is not added
    }
    else {
        let li = document.createElement("li");
        li.className="lists"
        li.innerHTML = inputBox.value;
        listItem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";   // this code will create the cross icon
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();


}

listItem.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // once task is completed it will show checked icon 
        e.target.classList.toggle("lists"); 
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Use to remove the task from the list
        saveData();

    }
}, false);

// function to save data 
function saveData() {
    localStorage.setItem("data", listItem.innerHTML);
    document.getElementById("count").innerText=document.getElementsByClassName("lists").length;
}
// function to create show task after page reloads
function showTask() {
    listItem.innerHTML = localStorage.getItem("data");
}
showTask();




