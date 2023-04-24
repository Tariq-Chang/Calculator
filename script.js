let btns = document.querySelectorAll('button');
let input = document.querySelector('#input');
let output = document.querySelector('#output');
let solve = document.querySelector('.equals');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let button = e.currentTarget;
        if (button.value === "=") {
            output.textContent = eval(input.value);
        } else if (button.value === "reset") {
            input.value = "";
            output.textContent = "Output: "
        } else if (button.value === "negate") {
            input.value *= -1;
        } else if (button.value === "sqrt") {
            output.textContent = Math.sqrt(input.value);
        }
        else {
            input.value += button.value;
        }

    })
});
