//Used to toggle between different pages on the website using bootstrap visibility

var homePage = document.querySelector('.Home');
var homeLink = document.querySelector('.home');
function toggleHomePage(){
    if(homePage.className === "active"){
        document.querySelector('.Home')

    }else{
        homePage.toggleAttribute.className("invisible");
    }
}

homeLink.onclick = toggleHomePage();
