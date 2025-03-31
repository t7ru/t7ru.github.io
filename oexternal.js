// waits until the entire dom is loaded and ready
document.addEventListener("DOMContentLoaded", () => {
  // selects all anchor (<a>) elements on the page
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    // checks if the link has the class 'noex' or not, if yes then ignore
    if (!link.classList.contains("noex")) {
      // if the 'noex' class is not present, it sets the 'target' attribute to '_blank'
      link.setAttribute("target", "_blank");
    }
  });
});

// scroll anims
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {threshold: 0.1});
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});