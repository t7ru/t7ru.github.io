document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (!link.classList.contains("noex")) {
      link.setAttribute("target", "_blank");
    }
  });
});
