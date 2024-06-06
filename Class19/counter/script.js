const incrementValRef = document.getElementById('increment');
const resetButton = document.getElementById('reset');
function increment(value) {
const counterRef = document.querySelector('span#number'); 
counterRef.textContent = parseInt(counterRef.textContent) + value;

}   

function decrement(value) {
    const counterRef = document.querySelector('span#number'); 
    counterRef.textContent = parseInt(counterRef.textContent) - value;
    
}

const addButtons = document.getElementById('add');
addButtons.addEventListener('click', function() {
    increment(parseInt(incrementValRef.value));
});

const subtractButtons = document.getElementById('subtract');
subtractButtons.addEventListener('click', function() {
    decrement(parseInt(incrementValRef.value));
});


resetButton.addEventListener('click', function() {
    const counterRef = document.querySelector('span#number'); 
    counterRef.textContent = 0;
});

