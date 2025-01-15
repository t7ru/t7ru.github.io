// waits until the entire dom is loaded and ready
document.addEventListener("DOMContentLoaded", () => {
  // selects all anchor (<a>) elements on the page
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    // checks if the link does NOT have the class 'noex'
    if (!link.classList.contains("noex")) {
      // if the 'noex' class is not present, it sets the 'target' attribute to '_blank'
      link.setAttribute("target", "_blank");
    }
  });
});

