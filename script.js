// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Button interaction
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked.";
});
