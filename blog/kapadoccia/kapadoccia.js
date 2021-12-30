const counter = document.getElementById('counter')
const likesCounter = document.getElementById('like-counter')



function updateCounter() {

    fetch('https://api.countapi.xyz/hit/julietikiba.com/kapadoccia').then(res => res.json()).then(res => {
        counter.innerText = `${res.value}`;
    });
}

updateCounter();




