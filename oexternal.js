document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (!link.classList.contains("noex")) {
      link.setAttribute("target", "_blank");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  const toggles = document.querySelectorAll(".collapsible-toggle");

  toggles.forEach(function (toggle) {
    const targetId = toggle.getAttribute("data-target");
    if (!targetId) return;

    const content = document.querySelector(targetId);
    if (!content) return;
    if (!toggle.classList.contains("active")) {
      content.style.maxHeight = "0px";
      content.style.paddingTop = "0";
      content.style.paddingBottom = "0";
    } else {
      content.style.paddingTop = "10px";
      content.style.paddingBottom = "10px";
      content.style.maxHeight = content.scrollHeight + 20 + "px";
    }

    toggle.addEventListener("click", function () {
      this.classList.toggle("active");
      const currentContent = document.querySelector(
        this.getAttribute("data-target")
      );
      if (!currentContent) return;

      if (
        currentContent.style.maxHeight &&
        currentContent.style.maxHeight !== "0px"
      ) {
        currentContent.style.paddingTop = "0";
        currentContent.style.paddingBottom = "0";

        void currentContent.offsetWidth;

        currentContent.style.maxHeight = "0px";
      } else {
        currentContent.style.paddingTop = "10px";
        currentContent.style.paddingBottom = "10px";

        void currentContent.offsetWidth;

        requestAnimationFrame(() => {
          currentContent.style.maxHeight =
            currentContent.scrollHeight + 20 + "px";
        });
      }
    });
  });

  particlesJS.load("particles-js-socials", "/particles.json", function () {});
});
