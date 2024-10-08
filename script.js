window.onscroll = function() { myFunction() };

function myFunction() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
        navbar.classList.add("transparent");
    }
}


