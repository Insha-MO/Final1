document.addEventListener('DOMContentLoaded', () => {
const steps = Array.from(document.querySelectorAll('.step'));
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');
let current = 0;

function showStep(index) {
steps[current].classList.add('hide');
current = index;
if (current >= steps.length) current = 0;
steps[current].classList.remove('hide');
const feedback = steps[current].querySelector('.feedback');
if (feedback) feedback.textContent = '';
}

steps.forEach((step, index) => {
step.querySelectorAll('button[data-answer]').forEach((button) => {
button.addEventListener('click', () => {
const correct = button.dataset.answer === 'true';
const feedback = step.querySelector('.feedback');
if (correct) {
if (feedback) feedback.textContent = 'Correct!';
showStep(index + 1);
} else {
overlay.classList.remove('hide');
}
});
});

const continueButton = step.querySelector('.continue');
if (continueButton) {
continueButton.addEventListener('click', () => showStep(index + 1));
}
});

restartBtn.addEventListener('click', () => {
overlay.classList.add('hide');
showStep(0);
});

showStep(0);
});
