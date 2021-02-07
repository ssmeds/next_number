let input = document.createElement("input");
let button = document.createElement("button");
let div = document.createElement("div");

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(div);


button.textContent = "Nästa nummer!";


button.addEventListener("click", function() {
    let userInput = input.value;

    nextNumber(userInput);
});


function nextNumber(x) {
    x ++;
    let y = x;
    div.innerHTML = "";
    input.value = "";
    div.innerHTML = y;
}