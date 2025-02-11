document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const question = document.querySelector('.question');
  const yesBtn = document.querySelector('.yes-btn');
  const noBtn = document.querySelector('.no-btn');

  if (!yesBtn || !noBtn) {
    console.error('Button elements not found.');
    return;
  }

  yesBtn.addEventListener('click', () => {
    question.innerHTML = 'That makes me the happiest!';
    
    // Hide both buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
  });

  // Define the maximum distance the "No" button can move from its original position
  const maxMoveDistance = 50;

  // Store the original position of the "No" button
  const originalLeft = parseFloat(getComputedStyle(noBtn).left);
  const originalTop = parseFloat(getComputedStyle(noBtn).top);

  const updateNoBtnPosition = (event) => {
    // Calculate random positions within a small area around the original position
    const randomLeft = originalLeft + (Math.random() - 0.5) * 2 * maxMoveDistance;
    const randomTop = originalTop + (Math.random() - 0.5) * 2 * maxMoveDistance;

    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
  };

  // Listen for mousemove on the noBtn to place it randomly within a small area
  noBtn.addEventListener('mousemove', updateNoBtnPosition);
});
