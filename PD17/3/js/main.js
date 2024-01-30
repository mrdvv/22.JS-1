let button = document.createElement("button");
button.innerText = "Spausk Mane!";

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    ;
}
);

document.getElementById("button").appendChild(button);