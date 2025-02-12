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
    question.innerHTML = 'That makes me the happiest!😘';
    
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

  // Function to create hearts falling from the top (Including 💕)
  const heartsContainer = document.querySelector('.hearts');

  function createHearts() {
    const numberOfHearts = 10; // Number of hearts to create each time (you can adjust this number)
    
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // Randomly choose between two heart emojis ❤️ or 💕
      heart.innerHTML = Math.random() < 0.5 ? "❤️" : "💕"; 

      // Random position, size, and animation duration for each heart
      heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
      heart.style.animationDuration = Math.random() * 5 + 3 + "s"; // Between 2-5 seconds for each heart
      heart.style.fontSize = Math.random() * 40 + 30 + "px"; // Random size for each heart

      heartsContainer.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  }

  // Generate multiple hearts every 500ms
  setInterval(createHearts, 500);
});
