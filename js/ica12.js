const generator = document.getElementById("generator");
const joke = document.getElementById("joke");

generator.addEventListener("click", getJoke);

let newData = {};

function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log(res);
            }
        })
        .then(res => {
            newData = res;
            console.log(newData);
            joke.textContent = newData.joke;
        })
        .catch((error) => {console.log(error)
        })
}