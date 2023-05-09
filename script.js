const formE1 = document.querySelector(".form");
const inputE1 = document.querySelector(".input");
const ulE1 = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem ("list"));

list.forEach(task=>{
    toDOList(task)
})



formE1.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(inputE1.value);
    toDOList()

});

function toDOList(task){
    let newTask = inputE1.value; 
    if(task){
        newTask = task.name
    }


    if(task && task.checked){
        liE1.className.add("checked")
    }

    const liE1 = document.createElement("li");      
    liE1.innerText;
    ulE1.appendChild(liE1)
    inputE1.value = "";
    const checkBtnE1 = document.createElement("div")
    checkBtnE1.innerHTML = `
    <i class="fas fa-check-square"></i>
    `;
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div")
    trashBtnE1.innerHTML =`
    <<i class="fas fa-trash"></i>
    `;
    liE1.appendChild(trashBtnE1);

    checkBtnE1.addEventListener("click", ()=>{
        liE1.classList.toggle("checked")
    })

    trashBtnE1.addEventListener("click", ()=>{
        liE1.remove();
    });
    updateLocalStorage()
}

function updateLocalStorage(){
     liE1 = document.querySelectorAll("li")
    let list = []
    liE1.forEach(liE1=>{
        list.push({
            name: liE1.innerText,
            checked: liE1.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list))
}