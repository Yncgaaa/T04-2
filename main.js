document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page-view");
  const logoBtn = document.getElementById("logo-btn");
  const yearSpan = document.getElementById("current-year");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  function switchPage(targetPageId) {
    pages.forEach(page => {
      page.classList.toggle("active", page.id === targetPageId);
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.dataset.page === targetPageId);
    });

    window.location.hash = targetPageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetPage = link.dataset.page;
      switchPage(targetPage);
    });
  });

  if (logoBtn) {
    logoBtn.addEventListener("click", event => {
      event.preventDefault();
      switchPage("home");
    });
  }

  const initialHash = window.location.hash.replace("#", "");
  const validPages = ["home", "televisions", "about"];

  if (validPages.includes(initialHash)) {
    switchPage(initialHash);
  } else {
    switchPage("home");
  }
});
