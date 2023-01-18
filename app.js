const button = document.querySelector(".button");
const rating_card__content = document.querySelector(".rating-card__content");
const ratings = document.querySelectorAll(".rate-form__radio-input");

button.addEventListener("click", function (event) {
  event.preventDefault();

  for (const rate of ratings) {
    if (rate.checked) {
      const yourRate = rate.value;
      rating_card__content.innerHTML = `
      <img class="rating-card__image" src="./images/illustration-thank-you.svg" alt="">
      <span class="selected centered-text">You selected ${yourRate} out of 5</span>
      <h1 class="rating-card__header centered-text">Thank you!</h1>
      <p class="rating-card__text centered-text">
      We appreciate you taking the time to give a rating. 
      If you ever need more support, don’t hesitate to get in touch!</p>
      `;
    }
  }
});
