const symbols = ["✷", "✦", "✪", "✵", "❖", "✧", "✸", "✪", "❉", "✵", "✦", "✷"];
const correctCombination = ["✷", "✪", "❉"];

function createCircle(elementId) {
    const circle = document.getElementById(elementId);
    for (let i = 0; i < 12; i++) {
        const angle = i * 30;
        const segment = document.createElement('div');
        segment.className = 'segment';
        segment.style.transform = `rotate(${angle}deg) translate(0, -110px)`;
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.innerText = symbols[i];
        symbol.style.transform = `rotate(${-angle}deg)`;
        segment.appendChild(symbol);
        circle.appendChild(segment);
    }
}

function rotateCircle(circleNumber, direction) {
    const circle = document.getElementById(`circle${circleNumber}`);
    const segments = circle.querySelectorAll('.segment');
    const angle = direction === 'left' ? 30 : -30;

    segments.forEach(segment => {
        const currentRotation = segment.style.transform.match(/rotate\(([-\d]+)deg\)/);
        const newRotation = (parseInt(currentRotation[1]) + angle) % 360;
        segment.style.transform = `rotate(${newRotation}deg) translate(0, -110px)`;
    });
}

function checkCombination() {
    const circles = [document.getElementById('circle1'), document.getElementById('circle2'), document.getElementById('circle3')];
    const combination = circles.map(circle => {
        const symbol = circle.querySelector('.segment[style*="rotate(0deg)"] .symbol');
        return symbol ? symbol.innerText : null;
    });

    const correct = combination.every((symbol, index) => symbol === correctCombination[index]);
    document.getElementById('message').innerText = correct ? "Korrekte Kombination! Die Kiste öffnet sich." : "Falsche Kombination. Versuche es erneut.";
}

document.addEventListener('DOMContentLoaded', () => {
    createCircle('circle1');
    createCircle('circle2');
    createCircle('circle3');
});
