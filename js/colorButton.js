document.getElementById("color-button").addEventListener("click", function (event) {
    event.preventDefault();
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});