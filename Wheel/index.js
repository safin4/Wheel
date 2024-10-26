const colors = [
    '#FF5733', '#FF8D33', '#FFC733', '#D4FF33',
    '#75FF33', '#33FF57', '#33FFBD', '#33D4FF',
    '#338DFF', '#5733FF', '#8D33FF', '#FF33C7'
];
const wheel = document.getElementById('wheel');
for (let i = 0; i < colors.length; i++) {
    const segment = document.createElement('div');
    segment.className = 'segment';
    segment.style.backgroundColor = colors[i];
    segment.style.transform = `rotate(${i * 30}deg)`;
    wheel.appendChild(segment);
}