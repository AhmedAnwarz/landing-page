/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionNameList = document.querySelectorAll('h2');
const sectionList = document.querySelectorAll('section');
const divList = document.querySelectorAll('.landing__container');
const navContainer = document.querySelector('#navbar__list');
const divHideList = document.querySelectorAll('#divID');
const sectionAnchor = document.querySelectorAll('.sectionAnchor');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function that checks whether a section is in viewport or not...
function isInViewport(element) {
    const temp = element.getBoundingClientRect();
    return (
        temp.top >= 0 &&
        temp.left >= 0 &&
        temp.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        temp.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function whichSectionInViewport() {
    for(let i = 0; i < sectionList.length; i++){
        if(isInViewport(divList[i])){
            return i;
        }
    }
}

// Highlighting sections functions
function removeHighlight(){
    for(let j = 0; j < navList.length; j++){
        navList[j].classList.add('menu__link');
        navList[j].classList.remove('navBar_Selected');
    }
}
function highlightSelectedSection(num){
    removeHighlight()
    navList[num].classList.remove('menu__link');
    navList[num].classList.add('navBar_Selected');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    for(let i = 0; i < sectionNameList.length; i++){
        let secName = sectionNameList[i].textContent;
        let e = document.createElement("li");
        let an = document.createElement("a");
        an.textContent = secName;
        e.appendChild(an);
        an.href = "#;";
        an.classList.add("menu__link");
        e.classList.add("navbar__menu");
        navContainer.appendChild(e);
    }
    
}

// Scroll to anchor ID using scrollTO event
function scrollToFunction(){
    for(let i = 0; i < navList.length; i++){
        navList[i].onclick = function(){
            // Highlighting selected section in NavBar
            highlightSelectedSection(i);
            sectionList[i].scrollIntoView({behavior: "smooth", block: "end"});
            // Checking if the selected section in navbar is collapsed or not
            divHideList[i].classList.toggle('hideDiv');
            
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
const navList = document.querySelectorAll('.menu__link');

// Scroll to section on link click
navContainer.addEventListener('click', scrollToFunction());

// Set sections as active
document.addEventListener('scroll', function makeActive(){
    const secNumber = whichSectionInViewport();
    for(let i = 0; i < sectionList.length; i++){
        if(i == secNumber){
            sectionList[i].classList.add("your-active-class");
            highlightSelectedSection(i);
        }
        else {
            if(sectionList[i].classList.contains("your-active-class")){
                sectionList[i].classList.remove("your-active-class");
                removeHighlight();
            }
        }
    }
});

// Making sections collapsable
document.addEventListener('click', function(){
    for(let i = 0; i < sectionAnchor.length; i++){
        sectionAnchor[i].onclick = function(){
            divHideList[i].classList.toggle('hideDiv');
        }
    }
});
