const container = document.getElementsByTagName("section")

const input = document.getElementById("input")

const button = document.getElementById("btn")

const list = document.getElementById("list")

const deleteAll = document.getElementById("deleteall")

let listText;

input.addEventListener("input", (e) => {
    listText = e.target.value;
});





button.addEventListener("click", () => {
    const listBtns = document.createElement("div")
    const list_item = document.createElement("div")
    listBtns.style.display = "flex"
    listBtns.style.gap = "17px"
    list_item.style.height = "50px"
    list_item.style.backgroundColor = "#c5e1e5"
    list_item.style.marginBottom = "10px"
    list_item.style.marginTop = "10px"
    list_item.style.borderRadius = "7px"
    list_item.style.borderColor = "#adbbbc"
    list_item.style.borderWidth = "2px"
    list_item.style.padding = "7px"
    list_item.style.display = "flex"
    list_item.style.justifyContent = "space-between"
    list_item.style.alignItems = "center"
    list_item.innerText = listText
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='bx bx-trash'></i>";
    deleteBtn.style.backgroundColor = "#1c1c9e"
    deleteBtn.style.paddingTop = "5px"
    deleteBtn.style.paddingBottom = "5px"
    deleteBtn.style.paddingRight = "10px"
    deleteBtn.style.paddingLeft = "10px"
    deleteBtn.style.color = "white"
    deleteBtn.style.borderRadius = "10px"
    listBtns.appendChild(deleteBtn)
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "<i class='bx bx-check'></i>";
    doneBtn.style.backgroundColor = "#097969"
    doneBtn.style.paddingTop = "5px"
    doneBtn.style.paddingBottom = "5px"
    doneBtn.style.paddingRight = "10px"
    doneBtn.style.paddingLeft = "10px"
    doneBtn.style.color = "white"
    doneBtn.style.borderRadius = "10px"
    doneBtn.addEventListener("click", ()=> {
        list_item.style.backgroundColor = "#AAFF00"
    })
    listBtns.appendChild(doneBtn)
    list_item.classList.add("fade-in");
    list.appendChild(list_item)
    list_item.appendChild(listBtns)
    deleteBtn.addEventListener("click", () =>{
        alert("Are You Sure? ")
        list_item.remove()
        
    })
    if (listText == undefined) {
        alert("NO TEXT FOUND")
        list_item.remove()
    }
    if (list.getElementsByTagName("div").length > 1) {
       
        deleteAll.style.display = "block"
        deleteAll.classList.add("fade-in")
    }
     
    deleteAll.addEventListener("click", ()=> {
        list.remove() 
        
        location.reload()
    })
   
});

function hovered(button) {
    button.style.backgroundColor = "#89CFF0"    
}
function unhovered(button) {
    button.style.backgroundColor = "#2260cb"    
}

function hovered(deleteAll) {
    deleteAll.style.backgroundColor = "#89CFF0"    
}
function unhovered(deleteAll) {
    deleteAll.style.backgroundColor = "#2260cb"    
}