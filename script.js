function scrollToSection() {
  document.getElementById("fees").scrollIntoView({ behavior: "smooth" });
}

// card select effect
function selectCard(card) {
  document.querySelectorAll(".card").forEach(c => c.classList.remove("highlight"));
  card.classList.add("highlight");
}
// show thank you screen
function showThankYou() {
  document.getElementById("thankyouScreen").style.display = "flex";
}

// hide thank you screen
function closeThankYou() {
  document.getElementById("thankyouScreen").style.display = "none";
}