function photographerTemplate(data) {
    const { name, portrait,id,city,country,tagline,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const location = document.createElement('em')
        location.classList.add('location')
        location.innerHTML = city +", " + country
        h2.textContent = name;
        const catchSentence = document.createElement('p')
        catchSentence.classList.add('catch-sentence')
        catchSentence.innerHTML=tagline
        const prix = document.createElement('p')
        prix.classList.add('price')
        prix.innerHTML=price + "€/jour"
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location)
        article.appendChild(catchSentence)
        article.appendChild(prix)
        article.setAttribute('tabindex',0)
        article.addEventListener("click",()=>{
             document.location.href=window.location.origin+'/Front-End-Fisheye/photographer.html?name='+name+'&id='+id
        })
        article.addEventListener("keyup",(e)=>{
            if(e.key==="Enter"){

                document.location.href=window.location.origin+'/Front-End-Fisheye/photographer.html?name='+name+'&id='+id
            }
       })
        return(article);
    }
    return { name, picture, getUserCardDOM }
}