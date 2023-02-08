const burgerbtn = document.querySelector('.open');
const burger = document.querySelector('.hiden-burger');
burgerbtn.addEventListener('click', makeBurger);
function makeBurger() {
  document.querySelector('.nav-bar').classList.toggle('not-hiden');
  document.querySelector('.nav-bar').classList.toggle('hiden-burger');
  burger.classList.toggle('hiden-burger');
  burger.classList.toggle('open-burger');
  burgerbtn.classList.toggle('open');
  burgerbtn.classList.toggle('not-open');
  if (burger.classList.contains('hiden-burger')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
