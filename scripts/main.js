// Console messages (for debugging)
document.addEventListener("DOMContentLoaded", _ => {
  console.log("Website loaded successfully.");
  
  // Handle the search function
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  
  function performSearch() {
    const query = searchInput.value.toLowerCase();
    console.log(`Search: "${query}"`);
  }

  searchButton.addEventListener("click", performSearch);
  
  searchInput.addEventListener("keypress", event => {
    if (event.key == "Enter") {
      performSearch();
    }
  });
});
