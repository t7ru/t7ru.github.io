document.addEventListener("click", function (event) {
  const hoverElements = document.querySelectorAll(".hovercon");
  hoverElements.forEach((el) => {
    if (!el.contains(event.target)) {
      el.classList.remove("active");
    }
  });
});
