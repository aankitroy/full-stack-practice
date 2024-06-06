const starContainerRef = document.querySelector('.star-container');
const ratingCountRef = document.querySelector('span#count');
var selectedRating = 0;

starContainerRef.addEventListener('mouseover', function(event) {
    console.log('mousehover event', event.target.dataset.index);
    if(event.target.dataset.index) {
        const index = event.target.dataset.index;
        for(let i = 0; i < index; i++) {
            starContainerRef.children[i].classList.add('star-filled');
        }
    }
});  



starContainerRef.addEventListener('mouseleave', function(event) {
        for(let i = selectedRating; i < 5; i++) {
            starContainerRef.children[i].classList.remove('star-filled');
        }
    
});  

starContainerRef.addEventListener('click', function(event) {
    if(event.target.dataset.index) {
        const index = event.target.dataset.index;
        for(let i = 0; i < index; i++) {
            starContainerRef.children[i].classList.add('star-filled');
        }
        selectedRating = index;
        ratingCountRef.innerText = selectedRating;
    }

});  