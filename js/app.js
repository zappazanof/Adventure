document.addEventListener('DOMContentLoaded', (event) => {
  // Event Listener für alle levelButton
  const levelButtons = document.querySelectorAll('.levelButton');
  const calendar = document.getElementById('calendar');

  // Funktion zum Zufällig Anordnen der Buttons
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Buttons in zufälliger Reihenfolge anordnen
  const shuffledButtons = shuffle(Array.from(levelButtons));
  calendar.innerHTML = '';
  shuffled
