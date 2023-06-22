const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl =  document.getElementById("container");

let selectedRating = "";

ratingsEl.forEach((ratingsEl) => {
   ratingsEl.addEventListener("click", (event) => {
    removeActive();
    event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active;");
   });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
        `;
    }
});

function removeActive(){
    ratingsEls.forEach((ratingsEl) => {
        ratingsEl.classList.remove("active");
    });
};
