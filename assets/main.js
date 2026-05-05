document.addEventListener('DOMContentLoaded', () => {
    const steps = Array.from(document.querySelectorAll('.step'));
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
    // Find the index of the wrong-answer section
    const wrongIndex = steps.findIndex(s => s.id === 'wrong-answer');
    showStep(wrongIndex);
    }
    });
    });

    const continueButton = step.querySelector('.continue');
    if (continueButton) {
    continueButton.addEventListener('click', () => showStep(index + 1));
    }

    const restartButton = step.querySelector('.restart');
    if (restartButton) {
    restartButton.addEventListener('click', () => showStep(0));
    }

    const startButton = step.querySelector('.start');
    if (startButton) {
    startButton.addEventListener('click', () => showStep(index + 1));
    }
    });

    showStep(0);
    });
    