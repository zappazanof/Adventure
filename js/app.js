document.addEventListener('DOMContentLoaded', (event) => {
  // Event Listener für alle levelButton
  const levelButtons = document.querySelectorAll('.levelButton');
  const calendar = document.getElementById('calendar');
  const backButton = document.getElementById('backButton');

  // Funktion zum Zufällig Anordnen der Buttons
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Buttons in zufälliger Reihenfolge anordnen und Event Listener hinzufügen
  function arrangeAndAttachListeners(buttons) {
    const shuffledButtons = shuffle(Array.from(buttons));
    calendar.innerHTML = '';
    shuffledButtons.forEach(button => {
      calendar.appendChild(button);
      button.addEventListener('click', () => {
        const level = button.getAttribute('data-level');
        window.location.href = `level${level}.html`; 
      });
    });
  }
  if (backButton) { backButton.addEventListener('click', () => { window.location.href = 'index.html'; }); }

  // Initial arrangement of buttons
  arrangeAndAttachListeners(levelButtons);
});
