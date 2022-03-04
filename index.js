checkBox = document.getElementById("checkbox");
body = document.querySelector(".body");
container = document.querySelector(".container");
facebook = document.querySelector(".facebook");
twitter = document.querySelector(".twitter");
instagram = document.querySelector(".instagram");
youtube = document.querySelector(".youtube");
section = document.querySelectorAll(".section")



checkBox.addEventListener("change", ()=>{
    body.classList.toggle('dark-body');
    container.classList.toggle("dark-container");
    facebook.classList.toggle("dark-facebook");
    twitter.classList.toggle("dark-twitter");
    instagram.classList.toggle("dark-instagram");
    youtube.classList.toggle("dark-youtube");
    for (let i = 0; i < section.length; i++){
    section[i].classList.toggle("dark-section")
    }
})