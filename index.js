const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const elForm = document.getElementById("form");
const elBtn = document.getElementById("btn");


function addTask() {
    const inputValue = inputBox.value;


    if (inputValue === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        li.appendChild(span)
    }
    inputBox.value = "";
}


elForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)