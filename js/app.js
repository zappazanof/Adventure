document.addEventListener('DOMContentLoaded', (event) => {
    // Event Listener für alle Level-Buttons
  const levelButtons = document.querySelectorAll('.levelButton');
  const calendar = document.getElementById('calendar');
  
  levelButtons.forEach(button => {
    button.addEventListener('click', () => {
      const level = button.getAttribute('data-level');
      window.location.href = `level${level}.html`;
    });
  });
  // Funktion zum Zufällig Anordnen der Buttons 
  function shuffle(array) { 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    } return array; } 
  // Buttons in zufälliger Reihenfolge anordnen 
  const shuffledButtons = shuffle(Array.from(levelButtons)); 
  calendar.innerHTML = ''; shuffled
});
