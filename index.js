// Mouse Event
const div = document.querySelector("#myDiv");

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";

div.addEventListener("click", e => {
    console.log("You clicked the mouse!");
    div.style.backgroundColor = "aqua";
})

div.addEventListener("mousedown", e => {
    console.log("You are holding the mouse down!");
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseup", e => {
    console.log("You let go of the mouse!");
    div.style.backgroundColor = "green";
})

div.addEventListener("dblclick", e => {
    console.log("You double clicked!");
    div.style.backgroundColor = "purple";
})

div.addEventListener("contextmenu", e => {
    console.log("You opened the context menu");
})

div.addEventListener("mouseover", e => {
    console.log("You entered the square!");
    div.style.backgroundColor = "blue";
})
div.addEventListener("mouseleave", e => {
    console.log("You left the square!");
    div.style.backgroundColor = "grey";
})

div.addEventListener("mousemove", e => {
    console.log("You are within the square!");
})


//Keyboard Event
const keyboardInput = document.getElementById("keyboard-input");

document.addEventListener("keydown", (Event) => {
    console.log(Event);
    if(Event.key == "a") {keyboardInput.value += Event.key; }
    if(Event.key == "b") {keyboardInput.value += Event.key; }
    if(Event.key == "c") {keyboardInput.value += Event.key; }
    if(Event.key == "Backspace") {keyboardInput.value = keyboardInput.value.slice(0,-1) }
})


//Event Change
let btn = document.querySelector("button");
let statusbar = document.querySelector("h2");
let select = document.querySelector("select");

select.addEventListener("change", () => {
    statusbar.innerText = select.value;
});

btn.addEventListener("click", () => {
    select.value = "marks";
    triggerChange(select);
});

function triggerChange(element) {
    let changeEvent = new Event("change");
    element.dispatchEvent(changeEvent);
}