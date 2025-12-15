window.addEventListener("load", () => {
  const logo = document.querySelector(".logo");
  const title = document.querySelector("h1");
  const subtitle = document.querySelector(".subtitle");
  const links = document.querySelectorAll(".link-btn");
  const footer = document.querySelector("footer");

  // Load animatsiya
  setTimeout(() => {
    logo.style.opacity = "1";
    logo.style.transform = "scale(1)";
  }, 200);

  setTimeout(() => {
    title.style.opacity = "1";
  }, 400);

  setTimeout(() => {
    subtitle.style.opacity = "0.8";
  }, 600);

  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, 800 + index * 150);

    // Ripple effect
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  setTimeout(() => {
    footer.style.opacity = "0.6";
  }, 1700);
});
