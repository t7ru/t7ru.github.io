document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a')
  links.forEach(link => {
    link.setAttribute('target', '_blank')
  })
})

function toggleHover(element) {
  element.classList.toggle("active");
}