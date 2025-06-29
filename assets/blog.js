document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const categoryCards = document.querySelectorAll(".category-card");
  let currentCategory = "all";

  // Function to show all items for the selected category
  function showAllItems() {
    categoryCards.forEach((card) => {
      const cardCategory =
        card.classList.contains(currentCategory) || currentCategory === "all";
      card.style.display = cardCategory ? "block" : "none";
    });
  }

  // Function to handle category button click
  function handleCategoryButtonClick(categoryButton) {
    categoryButtons.forEach((button) => {
      button.classList.remove("cat-btn-active");
    });
    categoryButton.classList.add("cat-btn-active");
    const category = categoryButton.getAttribute("data-category");
    if (category !== currentCategory) {
      currentCategory = category;
      showAllItems();
    }
  }

  // Add event listener to each category button
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor behavior
      handleCategoryButtonClick(this);
    });
  });

  // Programmatically trigger a click event on the "All" category button
  const allCategoryButton = document.querySelector(
    '.category-btn[data-category="all"]'
  );
  handleCategoryButtonClick(allCategoryButton);
});
