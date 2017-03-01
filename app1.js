var image = document.getElementsByClassName("image")[0];
var buttons = document.getElementsByClassName("buttons")[0];

document.addEventListener("mouseover", function() {
    image.setAttribute('src', 'img/dress-b.jpeg');
    buttons.style.display = 'inline';
});

document.addEventListener("mouseleave", function() {
    image.setAttribute('src', 'img/dress-a.jpeg');
    buttons.style.display = 'none';
});