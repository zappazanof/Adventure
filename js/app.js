document.addEventListener('DOMContentLoaded', (event) => {
  // Event Listener für alle levelButton
  const levelButtons = document.querySelectorAll('.levelButton');
  const calendar = document.getElementById('calendar');
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');

  // Funktion zum Zufällig Anordnen der Buttons
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function typeWriter(text, index, callback) {
    const storyContainer = document.getElementById('storyContainer');
    if (index < text.length) {
      storyContainer.innerHTML += text.charAt(index);
      setTimeout(() => typeWriter(text, index + 1, callback), 100);
    } else {
      callback();
    }
  }

  function showNextPart() {
    const storyParts = window.storyParts || []; // Greift auf die storyParts im jeweiligen Level-Skript zu
    const storyContainer = document.getElementById('storyContainer');
    if (window.currentPart === undefined) window.currentPart = 0;

    if (window.currentPart < storyParts.length) {
      storyContainer.innerHTML += "<br>"; // Fügt Zeilenumbruch zwischen Abschnitten hinzu
      typeWriter(storyParts[window.currentPart], 0, () => {
        window.currentPart++;
        if (window.currentPart < storyParts.length) {
          nextButton.style.display = 'block'; // Zeige den Button nach dem aktuellen Abschnitt an
        } else {
          nextButton.style.display = 'none'; // Verstecke den Button, wenn alle Abschnitte angezeigt wurden
        }
      });
    }
  }

  nextButton.addEventListener('click', () => {
    nextButton.style.display = 'none'; // Verstecke den Button, während der nächste Abschnitt angezeigt wird
    showNextPart();
  });

  backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Zeige den ersten Abschnitt beim Laden der Seite
  showNextPart();


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


  // Initial arrangement of buttons
  arrangeAndAttachListeners(levelButtons);
});
