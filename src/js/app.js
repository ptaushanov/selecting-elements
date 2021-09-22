import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document
  .querySelectorAll(".card:not(.active)")
  .forEach(card => {
    setTimeout(()=>{card.style.display = "none"}, 3000);
  })
});
