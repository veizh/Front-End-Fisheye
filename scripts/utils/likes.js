function likeIncrMethod() {
    let hearts = document.querySelectorAll(".btnlike");
    let likes = document.querySelectorAll(".number");
    hearts.forEach((e, i) => {
      e.addEventListener("click", (e) => {

        console.log(likes[i].dataset.liked);
        if (likes[i].dataset.liked === "false") {
          likes[i].innerHTML = Number(likes[i].dataset.number) + Number(1);
          likes[i].dataset.number = Number(likes[i].dataset.number) + 1;
          likes[i].dataset.liked = "true";
        } else {
          likes[i].innerHTML = Number(likes[i].dataset.number) - Number(1);
          likes[i].dataset.number = Number(likes[i].dataset.number) - 1;
          likes[i].dataset.liked = "false";
        }
  
        console.log("+1", i);
      })
    })
  }
  export default likeIncrMethod