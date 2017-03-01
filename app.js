document.addEventListener("mouseover", function() {
    document.getElementsByClassName("panda")[0].setAttribute('src', 'img/panda2.jpg');
});

document.addEventListener("mouseleave", function() {
    document.getElementsByClassName("panda")[0].setAttribute('src', 'img/panda.jpg');
});