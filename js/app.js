document.addEventListener('DOMContentLoaded', (event) => {
  // Schneeflocken-Logik bleibt unverändert
  
  // Event Listener für alle Level-Buttons
  const levelButtons = document.querySelectorAll('.levelButton');
  
  levelButtons.forEach(button => {
    button.addEventListener('click', () => {
      const level = button.getAttribute('data-level');
      window.location.href = `level${level}.html`;
    });
  });
});
