const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkBtn = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
chance = 10;

checkBtn.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;

    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Congratulations", true];
        [checkBtn.textContent, guess.style.color] = ["Replay", "#333"];

    } else if (inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance]
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance]
        guess.style.color = "#333";
    } else {
        [guess.textContent, remainChances.textContent] = ["Your number is invalid!", chance]
        guess.style.color = "red";
    }

    if (chance == 0) {
        [checkBtn.textContent, input.disabled,inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["You lost the game", "red"];
    }

    if (chance < 0) {
        window.location.reload();
    }
});