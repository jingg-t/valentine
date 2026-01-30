const images = ["assets/letterOG.png", "assets/letterFlipped.png"];
let index = 0;

setInterval(() => {
  document.getElementById("letter").src = images[index];
  index = (index + 1) % images.length;
}, 600);

// Button interaction
document.getElementById("letter").addEventListener("click", () => {
    document.getElementById("letter").style.display = "none";
    document.getElementById("clickMe").style.display = "none";
    document.getElementById("note").style.display = "flex";
    



});


const btn = document.getElementById("btn");
    const content = document.getElementById("content");

    btn.addEventListener("click", () => {
      content.classList.add("show");
    });