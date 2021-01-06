const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

buttons = () => {
  if (counter === slides.length - 1) {
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'block';
  } else if (counter === 0) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
  }
};

let counter = 0;
buttons();
nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

carousel = () => {
  buttons();
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
