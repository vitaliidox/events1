let nav = document.querySelector("#nav")
window.onload = function(){
    nav.innerHTML += `
    <div class="input-group mb-5 col-5 m-5">
  <input type="text" id="someTxt" class="form-control" placeholder="Input" aria-label="Input" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Send</button>
  </div>
    </div>`

let btn = document.querySelector(".btn")
btn.addEventListener('click', function(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);

    let box = document.querySelector("#box")
    let inp = document.getElementById("someTxt").value 
if(inp != ''){
    box.innerHTML =``
    box.innerHTML +=`
    <div id="post">${inp}</div>
    `
let divPost = document.querySelector("#post")
divPost.style.background = ``
divPost.style.background += `rgb(${red},${green},${blue})`
}})
}

