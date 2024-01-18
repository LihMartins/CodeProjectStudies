// includer.js
function includeInternalNav() {
    fetch('internal-nav.html') // Use the direct file name
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById('internal-nav-container').innerHTML = data;
    })
    .catch(function(error) {
        console.error('Error fetching internal navigation:', error);
    });
}

  // Call the function to include the internal navigation
includeInternalNav();
