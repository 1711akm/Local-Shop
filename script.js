// JavaScript for Back to Top Button
document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show the button when the user scrolls down
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Scroll to the top of the page when the button is clicked
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// JavaScript to implement wrap-around navigation
document.addEventListener("DOMContentLoaded", function() {
  // List of menu pages in the correct order
  const menuPages = ["breakfast.html", "lunch.html", "dinner.html", "drinks.html"];

  // Get the current page name
  const currentPage = window.location.pathname.split("/").pop();

  // Find the current page index in the menuPages array
  let currentPageIndex = menuPages.indexOf(currentPage);

  // Function to navigate to the next page (with wrap-around)
  function navigateToNextPage() {
    // If we're at the last page (Drinks), wrap back to the first page (Breakfast)
    currentPageIndex = (currentPageIndex + 1) % menuPages.length;
    window.location.href = menuPages[currentPageIndex];
  }

  // Function to navigate to the previous page (with wrap-around)
  function navigateToPrevPage() {
    // If we're at the first page (Breakfast), wrap back to the last page (Drinks)
    currentPageIndex = (currentPageIndex - 1 + menuPages.length) % menuPages.length;
    window.location.href = menuPages[currentPageIndex];
  }

  // Adding event listeners for "Next" and "Previous" buttons (or links)
  document.getElementById("nextButton").addEventListener("click", navigateToNextPage);
  document.getElementById("prevButton").addEventListener("click", navigateToPrevPage);
});
