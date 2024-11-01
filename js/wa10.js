const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = `It was a very cold day, 10 fahrenheit to be exact. But the :insertx: who invaded Earth still made us humans walk around completely naked. Wearing clothes was considered :inserty: where the :insertx: were from. A very brave human named Bob decided to protest the oppressive alien regime by strutting around outside in a mink coat. An officer of the :insertx: noticed Bob's impudence and quickly dealt with them by :insertz: Bob's closest friend who noticed the ordeal sadly said, "C'est la vie" and went back to his job of pushing a metal crate that weighed 200 pounds.`
const insertX = ["Needle Noses", "Glorpians", "Xenons", "Moon Men"]
const insertY = ["a hate crime", "out of style", "not very funny to laugh at", "unfit for an inferior species"]
const insertZ = ["shooting them with a death laser pointed towards Earth from outer space.", "turning them into a rat.", "shooting them with a shrink ray.", "turning them into a green pile of goo."]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(200/14)} stone`;
    const temperature =  `${Math.round((10 - 32) * (5/9))} centigrade`;
    newStory = newStory.replace("10 fahrenheit", temperature);
    newStory = newStory.replace("200 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}