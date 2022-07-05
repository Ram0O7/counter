// set initial count
let count = 0;

let audio1 = new Audio("audio1.wav");
let audio2 = new Audio("audio2.wav");
let audio3 = new Audio("audio3.wav");

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            audio3.play();
            count--;
        }
        else if (styles.contains("increase")) {
            audio1.play();
            count++;
        }
        else {
            audio2.play();
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black"
        }
        value.textContent = count;
    })
})