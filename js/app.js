document.addEventListener('DOMContentLoaded', (event) => {
  const levelButtons = document.querySelectorAll('.levelButton');
  const calendar = document.getElementById('calendar');
  const backButton = document.getElementById('backButton');
  const nextButton = document.getElementById('nextButton');
  const storyContainer = document.getElementById('storyContainer');

  // Funktion zum Zufällig Anordnen der Buttons
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function typeWriter(text, index, callback) {
    if (index < text.length) {
      storyContainer.innerHTML += text.charAt(index);
      setTimeout(() => typeWriter(text, index + 1, callback), 50);
    } else {
      callback();
    }
  }

  function showNextPart() {
    const storyParts = window.storyParts || []; // Greift auf die storyParts im jeweiligen Level-Skript zu
    if (window.currentPart === undefined) window.currentPart = 0;

    if (window.currentPart < storyParts.length) {
      storyContainer.innerHTML += "<br>"; // Fügt Zeilenumbruch zwischen Abschnitten hinzu
      typeWriter(storyParts[window.currentPart], 0, () => {
        window.currentPart++;
        if (window.currentPart < storyParts.length) {
          if (nextButton) {
            nextButton.style.display = 'block'; // Zeige den Button nach dem aktuellen Abschnitt an
          }
        } else {
          if (nextButton) {
            nextButton.style.display = 'none'; // Verstecke den Button, wenn alle Abschnitte angezeigt wurden
          }
        }
      });
    }
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      console.log('Next button clicked'); // Debug-Ausgabe
      nextButton.style.display = 'none'; // Verstecke den Button, während der nächste Abschnitt angezeigt wird
      showNextPart();
    });
  }

  if (backButton) {
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Initial arrangement of buttons
  function arrangeAndAttachListeners(buttons) {
    const shuffledButtons = shuffle(Array.from(buttons));
    if (calendar) {
      calendar.innerHTML = '';
      shuffledButtons.forEach(button => {
        calendar.appendChild(button);
        button.addEventListener('click', () => {
          console.log(`Button ${button.getAttribute('data-level')} clicked`); // Debug-Ausgabe
          const level = button.getAttribute('data-level');
          window.location.href = `level${level}.html`;
        });
      });
    }
  }

  arrangeAndAttachListeners(levelButtons); // Initial arrangement of buttons

  if (storyContainer) {
    showNextPart(); // Zeige den ersten Abschnitt beim Laden der Seite
  }
});
