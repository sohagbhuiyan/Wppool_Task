const pages = document.querySelectorAll(".side-name");

pages.forEach((item) => {
  item.addEventListener('click', active_item);
})

function active_item () {
  pages.forEach((item) => {
    item.classList.remove('is-active');
  });
  this.classList.add('is-active');
}