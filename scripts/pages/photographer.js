import data from "../../data/photographers.js";
import createCaroussel, { accessToCaroussel } from "../utils/caroussel.js";
import { image } from "../utils/classCaroussel.js";
import likeIncrMethod from "../utils/likes.js";
import createHeader from "./header.js";
let sortedArray;
const heart = `<svg  class="heart" width="31" height="35" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_120_561)">
<path d="M10.5 21.35L9.23125 20.03C4.725 15.36 1.75 12.28 1.75 8.5C1.75 5.42 3.8675 3 6.5625 3C8.085 3 9.54625 3.81 10.5 5.09C11.4537 3.81 12.915 3 14.4375 3C17.1325 3 19.25 5.42 19.25 8.5C19.25 12.28 16.275 15.36 11.7688 20.04L10.5 21.35Z" fill="#911C1C"/>
</g>
<defs>
<clipPath id="clip0_120_561">
<rect width="21" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;
//Mettre le code JavaScript lié à la page photographer.html
const str = window.location.href;
const url = new URL(str);
var search_params = new URLSearchParams(url.search);
let dataPhotograph;
let medias = [];

// function to check if the queries in the URL match with a known photographer => if yes set his data into the variable dataPhotographer
function getPhotographerId() {
  if (search_params.has("id")) {
    var id = search_params.get("id");
    console.log(id,"is the id query");
    data.photographers.forEach((e) => {
      if (e.id === Number(id)) {
        console.log("we got a match => we can set up a photographer");
        dataPhotograph = e;
        console.log(dataPhotograph);
      } else {
        return console.log("not matching");
      }
    })
   
  } 
}

// function to set medias corresponding to the specific photographer => creating an array of objects
function getPhotoFromPhotographer(ref) {
  data.media.forEach((e) => {
    if (e.photographerId === ref) {
      medias.push(e);
    }
  });
  console.log(medias);
}





// on veut maintenant afficher chaque photo de l'utilisateur sous forme de galerie
function createGallery(medias) {
  if (medias) {
    let totalLikes = 0;
    medias.forEach((e, i) => {
      totalLikes += e.likes;
      let content = e.image?e.image:e.video
        let picture =
          "assets/Sample_Photos/" + e.photographerId + "/" + content;
        let article = `
                <article class="card"  style="order:${i}">
                ${e.image?`<img class="photo child" tabindex="0" data-number=${i} data-id=${e.id} src="${picture}"/>`:`<video class="photo child" tabindex="0" data-number=${i} data-id=${e.id} src="${picture}"></video>`}
                    
                    <div class="container-flex">
                        <h2 class="title">${e.title}</h2>
                        <div class="likes" ><div class="number" data-number=${Number(
                          e.likes
                        )} data-liked="false" >${e.likes}</div> <button  class="btnlike">${heart}  </button>
                    </div>
                </article>
                `;
        document
          .querySelector(".container-articles")
          .insertAdjacentHTML("beforeend", article)
      document.querySelector(".total_likes").innerHTML =
        totalLikes + "  " + heart;
      document.querySelector(".tarif").innerHTML =
        dataPhotograph.price + "€ / jour";
    });
  }
}
//fonction qui injecte le nouveau tableau d'article trié et supprimer l'ancien
function reorganiseArticles() {
  var list = document.querySelectorAll("article");

  list.forEach((e) => {
    e.remove();
  });

  createGallery(sortedArray);
}
//fonction pour trier le tableau selon une méthode
function sortGallery(method) {
  sortedArray = [];
  if (method === "Croissant") {
    sortedArray = medias.sort(function compare(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    reorganiseArticles();
  }
  if (method === "Popularité") {
    sortedArray = medias.sort(function compare(a, b) {
      if (Number(a.likes) > Number(b.likes)) return -1;
      if (Number(a.likes) < Number(b.likes)) return 1;
      return 0;
    });
    reorganiseArticles();
    
  }
  if (method === "Date") {
    sortedArray = medias.sort(function compare(a, b) {
      console.log(a.date.replaceAll("-",''));
      if (Number(a.date.replaceAll("-",'')) < Number(b.date.replaceAll("-",''))) return -1;
      if (Number(a.date.replaceAll("-",'')) > Number(b.date.replaceAll("-",''))) return 1;
      return 0;
    });
    reorganiseArticles();
}
  likeIncrMethod()
}
let photos = document.querySelectorAll(".photo");

photos.forEach((e) => {
  e.addEventListener("click", (x) => {
    console.log(
      "il faut ouvrir la modale photo avec la photo",
      e.dataset.number,
      "au premier plan"
    );
  });
});

function init() {
    getPhotographerId();
    getPhotoFromPhotographer(dataPhotograph.id);
    createHeader(dataPhotograph);
    createCaroussel(medias)
  //creation de la galerie de base
  createGallery(medias);
  //possibilité d'augmenter les likes => il faut  raccorder ça a la bdd plus tard
  sortGallery('alphabetique')
  accessToCaroussel()

}

function changeOrderMethod(){
  let btn = document.querySelector('.order-btn')
  let options = document.querySelectorAll(".option div")
  options.forEach(e=>{
    e.addEventListener('click',()=>{
      let newMethod = e.textContent
      btn.innerHTML=newMethod
      console.log(newMethod);
      sortGallery(newMethod)
      createCaroussel(sortedArray)
      accessToCaroussel()
    })
   })
}

init();
 changeOrderMethod()