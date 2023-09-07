import { image,video } from "./classCaroussel.js"

 function createCaroussel(medias){
  let tmp = document.querySelectorAll(".item")
  console.log(tmp);
  if(tmp){

    tmp.forEach(e=>e.remove())
  }
    medias.forEach(e=>{
      if(e.image){
        let x = new image(e.id,e.title,e.photographerId,e.image)
        x.init()
      }
      if(e.video){
        let x = new video(e.id,e.title,e.photographerId,e.video)
        x.init()

      }  
    })
}
export function accessToCaroussel(){
    let tmp 
    document.querySelectorAll('article > .child').forEach(e=>e.addEventListener('click',(x)=>{
      console.log(x);
      if(x.key="Enter"){
        
      }
      document.querySelector('.caroussel').style.display="flex"
      tmp =e.getAttribute('data-id')
      let item =document.querySelector('.caroussel').querySelector(`[data-id="${tmp}"]`)
      let title = document.querySelector('.title-caroussel')
      title.innerHTML=item.getAttribute('data-title')
      item.classList.add('visible')
     }))
     
  }
  export function navCaroussel(direction){
      let items = document.querySelector('.caroussel').querySelectorAll(`.item`)
      let title = document.querySelector('.title-caroussel')
      let tmp 
    if(direction==="droite"){
      items.forEach((e,i)=>{
          if(e.classList.contains('visible')){
            console.log(i,'========',e);
            tmp =i
            
        }
      })
      if(tmp===0){
                items[tmp].classList.remove('visible')

                items[items.length-1].classList.add('visible')
                title.innerHTML=items[items.length-1].getAttribute('data-title')
                return
            }
            if(tmp!==0){
                items[tmp].classList.remove('visible')
                items[tmp-1].classList.add('visible')
                title.innerHTML=items[tmp-1].getAttribute('data-title')
                return
            }
    }
    if(direction==="gauche"){
        items.forEach((e,i)=>{
            if(e.classList.contains('visible')){
              console.log(i,'========',e);
              tmp =i
              
          }
        })
        if(tmp===items.length-1){
                  items[tmp].classList.remove('visible')
  
                  items[0].classList.add('visible')
                  title.innerHTML=items[0].getAttribute('data-title')
                  return
              }
              else{
                  items[tmp].classList.remove('visible')
                  items[tmp+1].classList.add('visible')
                  title.innerHTML=items[tmp+1].getAttribute('data-title')
                  return
              }
      }
      
  }
  function closeCaroussel(){
   let caroussel= document.querySelector('.caroussel')
   caroussel.style.display="none"
    caroussel.querySelectorAll('.item').forEach(e=>e.classList.remove('visible'))
  }
  document.querySelector('.closeCaroussel').addEventListener('click',()=>{closeCaroussel() })
  document.querySelector('.gauche').addEventListener('click',()=>{navCaroussel("gauche")})
  document.querySelector('.droite').addEventListener('click',()=>{navCaroussel("droite")})
export default createCaroussel



array  = [prenom{
  reggex:[rfgiojsqodgj];
  err:'maihfosqidgh',
  maxime:qlsdfh;
},email{
  reggex:[rfgiojsqodgj];
  err:'maihfosqidgh',
  maxime:qlsdfh;
},nom{
  reggex:[rfgiojsqodgj];
  err:'maihfosqidgh',
  maxime:qlsdfh;
}]
 array[x].reggex