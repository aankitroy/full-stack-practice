// Write JS to toggle sidebar functionality here
const toggleButtonRef = document.querySelector('#toggle-button');
const sidebarRef = document.querySelector('#sidebar');
const mainContentRef = document.querySelector('#main-content'); 

let toggleOpen = true;

sidebarRef.classList.add('sidebar__open');

toggleButtonRef.addEventListener('click', () => {
    if(toggleOpen){
        sidebarRef.classList.remove('sidebar__open');
        sidebarRef.classList.add('sidebar__close');
        toggleOpen = false;
    } else {
        sidebarRef.classList.remove('sidebar__close');
        sidebarRef.classList.add('sidebar__open');
        toggleOpen = true;
    }
});