
// Write JS code for accordion here
const accordionItemRef = document.querySelectorAll(".accordion-item");
const accordionButton = document.querySelectorAll('.accordion-button');

accordionButton.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        const accordionContent =  event.target.parentElement.querySelector('.accordion-content');
        if(accordionContent.style.display == 'none'){
            accordionContent.style.display = 'block';
        } else {
            accordionContent.style.display = 'none';
        }
    })
});