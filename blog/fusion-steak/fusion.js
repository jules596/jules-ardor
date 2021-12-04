const counter = document.getElementById('counter')
const likesCounter = document.getElementById('like-counter')
const hearts = document.querySelector('#heart-btn')



function updateCounter() {

    fetch('https://api.countapi.xyz/hit/julietikiba.com/fusionsteakhouse').then(res => res.json()).then(res => {
        counter.innerText = `${res.value}`;
    });
}

updateCounter();

hearts.addEventListener('click', () => {
    fetch('https://api.countapi.xyz/hit/julietikiba.com/fusions-likes').then(res => res.json()).then(res => {
        likesCounter.innerText = `${res.value}`;

        alert("Thanks, your rating means alot")
        
    })

})




