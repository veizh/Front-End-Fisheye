export class image{
    constructor(id,title,photographerId,acces,){
        this.id= id
        this.title= title
        this.acces= acces
        this.photographerId= photographerId
    }

    createContainer(){
        let image = document.createElement('img')
        image.setAttribute("src",`assets/Sample_Photos/${this.photographerId}/${this.acces}`)
        image.setAttribute('alt',this.title)
        image.dataset.id=this.id
        image.dataset.title=this.title
        image.classList.add("item")
        return image
    }
    init(){
        document.querySelector('.gauche').insertAdjacentElement("afterend",this.createContainer())
    }
}
export class video{
    constructor(id,title,photographerId,acces,){
        this.id= id
        this.title= title
        this.acces= acces
        this.photographerId= photographerId
    }

    createContainer(){
        let video = document.createElement('video')
        let source = document.createElement('source')
        source.setAttribute("src",`assets/Sample_Photos/${this.photographerId}/${this.acces}`)
        video.appendChild(source)
        video.setAttribute('controls',true)
        video.setAttribute('alt',this.title)
        video.dataset.id=this.id
        video.dataset.title=this.title
        video.classList.add("item")
        return video
    }
    init(){
        console.log(this.photographerId);
        document.querySelector('.gauche').insertAdjacentElement("afterend",this.createContainer())
    }
}
