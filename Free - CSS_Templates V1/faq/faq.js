var faqItems = document.querySelectorAll(".faq-item");
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

faqItems.forEach(function(faqItem) {
  var question = faqItem.querySelector(".faq-question");
  question.addEventListener("click", function() {
    faqItem.classList.toggle("faq-open");
  });
});

searchButton.addEventListener("click", function() {
  var searchTerm = searchInput.value.toLowerCase();
  faqItems.forEach(function(faqItem) {
    var question = faqItem.querySelector(".faq-question").textContent.toLowerCase();
    var answer = faqItem.querySelector(".faq-answer").textContent.toLowerCase();
    if (question.indexOf(searchTerm) === -1 && answer.indexOf(searchTerm) === -1) {
      faqItem.classList.add("hidden");
    } else {
      faqItem.classList.remove("hidden");
    }
  });
});