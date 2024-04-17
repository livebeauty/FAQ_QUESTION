
let btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", toggle);
})

function toggle(event) {
    // Get the parent box of the clicked button
    let parentBox = event.target.closest(".box");

    // Find the answer box inside the parent box
    let answerShow = parentBox.querySelector(".ans");

    // Toggle the 'myStyle' class to change visibility of the answer
    answerShow.classList.toggle("myStyle");
}
