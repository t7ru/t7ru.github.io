document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.setAttribute('target', '_blank');
  });
});

document.addEventListener("click", function (event) {
  const hoverElements = document.querySelectorAll(".hovercon");
  hoverElements.forEach(el => {
    if (!el.contains(event.target)) {
      el.classList.remove("active");
    }
  });
});
