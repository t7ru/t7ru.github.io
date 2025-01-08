document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a')
  links.forEach(link => {
    link.setAttribute('target', '_blank')
  })
})

function toggleHover(element) {
  element.classList.toggle("active");
}

const hoverElements = document.querySelectorAll(".hovercon");
hoverElements.forEach(el => {
  el.addEventListener("click", function (event) {
    event.stopPropagation(); 
  });
});

document.addEventListener("click", function (event) {
  hoverElements.forEach(el => {
    if (!el.contains(event.target)) {
      el.classList.remove("active");
    }
  });
});