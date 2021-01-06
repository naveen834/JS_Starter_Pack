const arr = [
  '1-color-flipper',
  '2-counter',
  '3-reviews',
  '4-navbar',
  '5-modal',
  '6-questions',
  '7-menu',
  '8-video',
  '9-scroll',
  '10-tabs',
  '11-countdown-timer',
  '12-lorem-ipsum',
  '13-grocery-bud',
  '14-slider',
  '15-ES6-slider',
];
const links = document.querySelector('.links');
arr.forEach((item) => {
  links.innerHTML += `<li>
          <a href="../../../${item}/setup/index.html">${item}</a>
        </li>
`;
});
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
