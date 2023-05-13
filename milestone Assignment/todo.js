
const listItems = ["Item 1", "Item 2", "Item 3", "Item 4"];


const addButton = document.querySelector("#add-button");


const list = document.querySelector("#list");


let currentIndex = 0;


addButton.addEventListener("click", () => {
 
  if (currentIndex < listItems.length) {
    
    const newItem = document.createElement("li");
    
    newItem.innerText = listItems[currentIndex];

    list.appendChild(newItem);
 
    currentIndex++;
  } else {
    
    const message = document.createElement("p");
    message.innerText = "All items have been added.";
    message.style.color = "green";
    list.appendChild(message);
  }
});
