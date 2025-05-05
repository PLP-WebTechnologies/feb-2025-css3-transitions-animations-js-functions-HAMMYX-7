const saveBtn = document.getElementById('saveBtn');
const showBtn = document.getElementById('showBtn');
const box = document.getElementById('box');

// Save color preference to localStorage
saveBtn.addEventListener('click', () => {
  const color = prompt("Enter your favorite color:");
  if (color) {
    localStorage.setItem('favColor', color);
    alert("Favorite color saved!");
  }
});

// Retrieve and apply saved color
showBtn.addEventListener('click', () => {
  const savedColor = localStorage.getItem('favColor');
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    alert(`Your favorite color is ${savedColor}`);
  } else {
    alert("No favorite color saved.");
  }
});

// Trigger animation on click
box.addEventListener('click', () => {
  box.classList.add('animate');

  // Remove the class after animation ends to allow re-triggering
  box.addEventListener('animationend', () => {
    box.classList.remove('animate');
  }, { once: true });
});
 
