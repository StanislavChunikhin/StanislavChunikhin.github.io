var link = document.querySelector(".btn-contact");

var popup = document.querySelector(".bgrnd-feedback-form");
var form = document.querySelector(".feedback-form");
var close = popup.querySelector(".feedback-button");

var login = popup.querySelector("[name=login]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  form.classList.add("form-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
      }
    }
  });
