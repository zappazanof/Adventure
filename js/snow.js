document.addEventListener('DOMContentLoaded', () => {
  const snowflakeContainer = document.getElementById('snowflakes');
  const snowflakeCount = 100;
  
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `${Math.random() * 100}vh`; // Zufällige Höhe
    snowflake.style.animationDuration = `${Math.random() * 7 + 6}s`; // 7 bis 13 Sekunden
    snowflake.style.fontSize = `${Math.random() * 2 + 1}em`; // 1 bis 3 em
    snowflake.style.opacity = Math.random().toString();

    snowflakeContainer.appendChild(snowflake);
  }
});
