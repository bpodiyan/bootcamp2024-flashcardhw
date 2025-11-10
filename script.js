const flashcards = [
  { term: "HTML", definition: "HyperText Markup Language" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;

const cardContent = document.getElementById("card-content");
const flashcard = document.getElementById("flashcard");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const addBtn = document.getElementById("add-card-btn");
const newTermInput = document.getElementById("new-term");
const newDefInput = document.getElementById("new-definition");


function displayCard() {
  const currentCard = flashcards[currentIndex];
  cardContent.textContent = showingTerm ? currentCard.term : currentCard.definition;
}


flashcard.addEventListener("click", () => {
  showingTerm = !showingTerm;
  displayCard();
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingTerm = true;
  displayCard();
});


prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingTerm = true;
  displayCard();
});


addBtn.addEventListener("click", () => {
  const newTerm = newTermInput.value.trim();
  const newDef = newDefInput.value.trim();

  if (newTerm && newDef) {
    flashcards.push({ term: newTerm, definition: newDef });
    newTermInput.value = "";
    newDefInput.value = "";
    alert("New card added!");
  } else {
    alert("Please fill in both term and definition.");
  }
});


window.onload = displayCard;
