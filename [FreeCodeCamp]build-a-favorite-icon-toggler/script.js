const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    button.classList.toggle("filled");
    
    button.innerHTML = button.classList.contains("filled") ? "&#10084;" : "&#9825;";
  });
});