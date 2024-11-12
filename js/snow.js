document.addEventListener('DOMContentLoaded', () => {
  const snowflakeContainer = document.getElementById('snowflakes');
  const snowflakeCount = 200;

  // Check if it's the first page load
  const isFirstLoad = !localStorage.getItem('snowflakesLoadedBefore');

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = `${Math.random() * 100}vw`;
    if (isFirstLoad) {
      snowflake.style.top = `${Math.random() * 100}vh`; // Random height
    } else {
      snowflake.style.top = `${Math.random() * 10}vh`; // Only at the top
    }
    snowflake.style.animationDuration = `${Math.random() * 7 + 6}s`; // 6 to 13 seconds
    snowflake.style.fontSize = `${Math.random() * 2 + 1}em`; // 1 to 3 em
    snowflake.style.opacity = Math.random().toString();

    snowflakeContainer.appendChild(snowflake);
  }

  // Set the flag in localStorage
  localStorage.setItem('snowflakesLoadedBefore', false);
});
