const typingText = document.querySelector('.typing');
const words = ["Web Developer", "Designer", "Problem Solver"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const currentWord = words[i];
  typingText.textContent = currentWord.substring(0, j);

  let speed = 100;

  if (!isDeleting && j < currentWord.length) {
    j++;
    speed = 150 + Math.random() * 100;
  } else if (isDeleting && j > 0) {
    j--;
    speed = 50 + Math.random() * 50;
  } else {
    if (!isDeleting) {
      speed = 1000;
    } else {
      speed = 300;
      i = (i + 1) % words.length;
    }
    isDeleting = !isDeleting;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();



const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.2 });
reveals.forEach(reveal => observer.observe(reveal));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) link.classList.add('active');
  });
});

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('navbar');
menuBtn.addEventListener('click', () => nav.classList.toggle('show'));

document.getElementById('year').textContent = new Date().getFullYear();
