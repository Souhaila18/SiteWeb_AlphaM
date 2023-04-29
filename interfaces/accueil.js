const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  // effectuer une recherche d'image avec le terme de recherche
  console.log('Recherche d\'image pour: ', searchTerm);
});
