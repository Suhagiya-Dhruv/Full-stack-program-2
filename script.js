const div = document.querySelector(".box-parent")
const child = div.children;

for (let i = 0; i < child.length; i++) {
    child[i].addEventListener('mouseenter', mouseEnter)
    child[i].addEventListener('mouseleave', mouseLeave)
}

function mouseEnter(event) {
    const value = Number(event.target.dataset.id)
    colorFill(value, true)
}

function mouseLeave(event) {
    const value = Number(event.target.dataset.id)
    colorFill(value, false)
}

function colorFill(value, fill) {
    if (fill) {
        for (let i = 0; i < value; i++) {
            child[i].style.backgroundColor = "yellow";
        }
    } else {
        for (let i = 0; i < value; i++) {
            child[i].style.backgroundColor = "transparent";
        }
    }
}