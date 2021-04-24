
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
function dogLinkCreator() {
  let dogLinks = [];

  for (let key in dogs) {

    let a = document.createElement('a');
    a.textContent = key;
    a.href = dogs[key];
    let li = document.createElement('li');
    li.appendChild(a);
    li.className = "dog-link";
    li.classList += " hidden";
    dogLinks.push(li); 
  } 
  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");

  dogLinks.forEach( dog => {
    ul.appendChild(dog); 
  })
}

attachDogLinks();

let dropDown = document.querySelector(".drop-down-dog-nav");

function handleEnter() {
  let dropDowns = document.querySelectorAll(".hidden");
  let dropDownsArr = Array.from(dropDowns);
  dropDownsArr.forEach(li => {
    li.classList.remove("hidden");
  });
}

function handleLeave() {
  let dropDowns = document.querySelectorAll(".dog-link");
  let dropDownsArr = Array.from(dropDowns);
  dropDownsArr.forEach(li => {
    li.classList += " hidden";
  });
}

dropDown.addEventListener("mouseenter", handleEnter);
dropDown.addEventListener("mouseleave", handleLeave);

