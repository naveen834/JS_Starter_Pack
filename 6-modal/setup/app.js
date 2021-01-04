// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

modalbtn = document.querySelector('.modal-btn');
ovmodal = document.querySelector('.modal-overlay');
closebtn = document.querySelector('.close-btn');

modalbtn.addEventListener('click', () => {
  ovmodal.classList.add('open-modal');
});

closebtn.addEventListener('click', () => {
  ovmodal.classList.remove('open-modal');
});
