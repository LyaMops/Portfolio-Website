const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        removeTabs();
        this.classList.add('active-link');
        document.getElementById(targetId).classList.add('active-tab');
    })
});

function removeTabs() {
    tabLinks.forEach(element => {
        element.classList.remove('active-link');
    })
    tabContents.forEach(element => {
        element.classList.remove('active-tab');
    })
}

const openSideMenuBtn = document.querySelector('.fa-solid.fa-bars');
const closeSideMenuBtn = document.querySelector('.fa-solid.fa-xmark');
const navList = document.querySelector('nav');

function openSideMenu() {
    navList.querySelector('ul').classList.add('nav-active');
    navList.querySelector('.fa-bars').style.visibility = 'hidden';
}

function closeSideMenu() {
    navList.querySelector('ul').classList.remove('nav-active');
    navList.querySelector('.fa-bars').style.visibility = 'visible';
}

openSideMenuBtn.addEventListener('click', openSideMenu);
closeSideMenuBtn.addEventListener('click', closeSideMenu); 

