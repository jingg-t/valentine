const images = ["assets/letterOG.png", "assets/letterFlipped.png"];
let index = 0;
let clicks = 0; 
const dict = {
  1: "Really?",
  2: "Are you Sure?",
  3: "Try again.",
  4: "Do you hate me?",
  5: "...",
  6: ":(",
  0: ":((((("
};
setInterval(() => {
  document.getElementById("letter").src = images[index];
  index = (index + 1) % images.length;
}, 600);

// Button interaction
document.getElementById("letter").addEventListener("click", () => {
    document.getElementById("letter").style.display = "none";
    document.getElementById("clickMe").style.display = "none";
    //document.getElementById("note").style.display = "flex";
    document.getElementById("note").classList.add("show");
    document.getElementById("yesBtn").classList.add("show");
    document.getElementById("noBtn").classList.add("show");
});

document.getElementById("noBtn").addEventListener("click", () => {
    clicks += 1;
    document.getElementById("noBtn").textContent = dict[clicks % 7];
})



