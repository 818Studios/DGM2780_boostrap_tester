//Used to toggle between different pages on the website using bootstrap visibility

function toggleHome(){
    document.querySelector('#homePage').classList.toggle("d-none");

    document.querySelector('#homePage').classList.toggle("d-none");

    document.querySelector('#homePage').classList.toggle("d-none");

    document.querySelector('#homePage').classList.toggle("d-none");

    document.querySelector('#homePage').classList.toggle("d-none");

    document.querySelector('#homePage').classList.toggle("d-none");
} //end function

const HOMEPAGE= document.querySelector('#homeLink');
HOMEPAGE.onclick = toggleHome;