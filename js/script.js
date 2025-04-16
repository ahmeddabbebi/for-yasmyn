// js/script.js
console.log("Welcome to our memories ❤️");

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-grid img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        modalImage.src = img.src;
        modalText.textContent = img.dataset.date || "";
        modal.classList.remove("hidden");
      });
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  


