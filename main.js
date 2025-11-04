const text = [
  "Exploring the intersection of technology and data science.",
  "Transforming data into intelligent digital solutions.",
  "Building systems that learn, adapt, and make an impact."
];

let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (charIndex < text[index].length) {
    typedText.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 30);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
