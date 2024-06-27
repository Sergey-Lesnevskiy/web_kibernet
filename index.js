const button = document.querySelector('.hero__content-button')
const popup = document.querySelector('.wrapper__popup')
const cross_popup = document.querySelector('.cross')

button.addEventListener('click',()=>{
  popup.classList.toggle('active');
})
cross_popup.addEventListener('click',()=>{
  popup.classList.toggle('active');
})