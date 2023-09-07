function galleryTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.addEventListener("click",()=>{
            document.location.href='http://127.0.0.1:5500/Front-End-Fisheye/photographer.html'
        })
        return(article);
    }
    return { name, picture, getUserCardDOM }
}