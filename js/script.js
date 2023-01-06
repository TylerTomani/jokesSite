const jokeContainer = document.querySelector('.joke-container');
const theJokeEl = document.getElementById('theJokeEl');
const punchEl = document.getElementById('punchline');
const img = document.querySelector('.img-container > img');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const cats = document.querySelectorAll('.cat');
let jokeType;
let currentJoke;
let catClicked = false;

addEventListener("DOMContentLoaded", generateJoke)

cats.forEach(cat => {
    cat.addEventListener('click', e => {
        jokeType = e.target.innerText.toLowerCase().split(" ").join("")
        generateJoke()
        e.target.addEventListener("click", e=> {
            catClicked = true;
            console.log(catClicked)

            // if(catClicked){
            //     theJokeEl.focus();
            //     catClicked = false;
            // }
        })
        
    })
})


let randomNum = 0;
function generateJoke(){
    switch(jokeType){
        case "jokes":
            img.src = ""
            randomNum = Math.floor((Math.random() * jokesObj.jokes.length) )           
            theJokeEl.innerText = jokesObj.jokes[randomNum].theJoke
            theJokeEl.style.fontSize = "1.5rem"
            punchEl.innerText = jokesObj.jokes[randomNum].punch    
            currentJoke = jokesObj.jokes[randomNum].theJoke
            console.log(currentJoke)
            break;
        case "movielines":
            randomNum = Math.floor((Math.random() * jokesObj.movielines.length) )
            theJokeEl.innerText = jokesObj.movielines[randomNum].line;
            punchEl.innerText = jokesObj.movielines[randomNum].movie;
            let anchor = document.createElement('a')
            punchEl.style.display ="flex"
            punchEl.style.flexDirection="column"
            anchor.style.fontSize = ".8rem"
            anchor.style.color = "blue"
            anchor.style.textDecoration = "underline"
            anchor.innerText = jokesObj.movielines[randomNum].link;
            anchor.href = jokesObj.movielines[randomNum].link;
            anchor.setAttribute("tabindex","1")
            anchor.setAttribute("target","_blank")
            console.log(anchor.getAttribute("tabindex"))
            console.log(anchor.getAttribute("target"))
            anchor.addEventListener("click", e => {
                console.log(e.target)
            })
            img.src = jokesObj.movielines[randomNum].imglink
            punchEl.appendChild(anchor)
            theJokeEl.style.fontSize = ".9rem"
            break;
        case "standup":
            // img.src = ""
            randomNum = Math.floor((Math.random() * jokesObj.standup.length) )
            theJokeEl.innerText = jokesObj.standup[randomNum].theJoke
            theJokeEl.style.fontSize = "1.5rem"
            punchEl.innerText = jokesObj.standup[randomNum].comedian
            img.src = jokesObj.standup[randomNum].imglink
            currentJoke = jokesObj.standup[randomNum].theJoke
            console.log(currentJoke)
            break;
        case "witty":
            img.src = ""
            randomNum = Math.floor((Math.random() * jokesObj.witty.length) )
            // theJokeEl.innerText = ""
            theJokeEl.innerText = jokesObj.witty[randomNum].theJoke
            theJokeEl.style.fontSize = "1.5rem"
            punchEl.innerText = jokesObj.witty[randomNum].punch
            currentJoke = jokesObj.witty[randomNum].theJoke
            console.log(currentJoke)
            break;
        default:
            console.log("no joke type selected")

    }

    
}

nextBtn.addEventListener('click', generateJoke)

// previousBtn.addEventListener('click', e=> {
//     theJokeEl.innerText = currentJoke;
// })
function generateWittyJoke(){
    let randomNum = Math.floor((Math.random() * jokesObj.jokes.length) )
}