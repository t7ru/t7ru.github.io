document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.setAttribute('target', '_blank');
  });
});

function toggleHover(element) {
  element.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const hoverElements = document.querySelectorAll(".hovercon");
  let clickedInside = false;

  hoverElements.forEach(el => {
    if (el.contains(event.target)) {
      clickedInside = true;
    } else {
      el.classList.remove("active");
    }
  });