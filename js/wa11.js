const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['safari_elephant.JPG', 'safari_gazelle.JPG', 'safari_giraffe.JPG', 'safari_lion.JPG', 'safari_zebra.JPG'];

/* Declaring the alternative text for each image file */

const alts = {
    'safari_elephant.JPG' : 'Closeup of an elephant in the middle of a road.',
    'safari_gazelle.JPG' : 'Gazelle looking towards camera with wildebeest behind it.',
    'safari_giraffe.JPG' : 'Grown Giraffe with young giraffe behind it.',
    'safari_lion.JPG' : 'Lion laying down and partly concealed by bushes.',
    'safari_zebra.JPG' : 'Two Zebras with giraffe standing behind them.'
};

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', display => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', brightness => {
    let check = btn.getAttribute('class');
    if (check === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; 
    }
});
