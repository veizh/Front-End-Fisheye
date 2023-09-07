// on veut maintenant afficher le header du photographe en question => methode de creation de hearder dynamique avec variable pour le nom prenom l'image le lieu et la tagline!

function createHeader(data) {
    const picture = `assets/photographers/${data.portrait}`;
    let headerPhotograph = document.querySelector(".photograph-header");
    let button = document.querySelector(".modal_opening");
  
    let infos = document.createElement("div");
    infos.classList.add("container_infos");
    let h1 = document.createElement("h1");
    h1.textContent = data.name;
  
    let location = document.createElement("p");
    location.classList.add("location");
    location.textContent = data.city + ", " + data.country;
  
    let tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.textContent = data.tagline;
    let pp = document.createElement("div");
    pp.classList.add("pp");
    pp.style.backgroundImage = "url('" + picture + "')";
    infos.appendChild(h1);
    infos.appendChild(location);
    infos.appendChild(tagline);
    headerPhotograph.insertBefore(infos, button);
    headerPhotograph.appendChild(pp);
  }
  export default createHeader