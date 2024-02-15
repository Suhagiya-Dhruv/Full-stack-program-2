const div = document.querySelector(".box-parent")
const child = div.children;

let prvId = 0;
div.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        prvId = id;
        colorFill(id)
    }
})

div.addEventListener('mouseleave', function(){
    clearHoverColor();
    colorFill(prvId)
})

for (var i = 0; i < child.length; i++) {
    child[i].addEventListener("mouseenter", mouseEnter)
}

function mouseEnter(event) {
    clearHoverColor();
    for (var i = 0; i < event.target.dataset.id; i++) {
        child[i].classList.add("yellow")
    }
 
}

function clearHoverColor() {
    for (var i = 0; i < child.length; i++) {
        child[i].classList.remove("yellow");
        child[i].classList.remove("green");
    }
}

function colorFill(id) {
    for (var i = 0; i < id; i++) {
        child[i].classList.add("green");
    }
}