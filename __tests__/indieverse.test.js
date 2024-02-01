test('Navigation links should be clickable', () => {
    // Find navigation links on the page
    const navLinks = document.querySelectorAll('nav a');

    // Simulate clicks on each link
    navLinks.forEach((link) => {
      link.click(); // Or use a testing library to simulate clicks

      // Assert that the appropriate page or content is displayed
      expect(/* some condition based on the clicked link */).toBe(true);
    });
});

test('Game cards display essential information', () => {
    // Render the component or page containing game cards
    const wrapper = render(<GameCards />); // Replace with your actual component

    // Find the game card elements
    const gameCards = wrapper.find('.game-card'); // Adjust selector as needed

    // Verify that each card displays expected information
    gameCards.forEach((card) => {
    expect(card.querySelector('.game-title').textContent).toBeDefined();
    expect(card.querySelector('.game-image').src).toBeDefined();
    expect(card.querySelector('.game-genre').textContent).toBeDefined();
    expect(card.querySelector('.game-price').textContent).toBeDefined();
    });
});

test('Clicking a game card leads to the correct game detail page', () => {
    // Render the component or page containing game cards
    const wrapper = render(<GameCards />);

    // Find a specific game card
    const firstGameCard = wrapper.find('.game-card').first();

    // Simulate a click on the card
    firstGameCard.simulate('click');

    test('Search results match entered keywords', () => {
        // Render the component or page containing the search functionality
        const wrapper = render(<Search />); // Replace with your actual component

        // Find the search input element
        const searchInput = wrapper.find('input[type="text"]');

        // Type a search query
        searchInput.simulate('change', { target: { value: 'indie platformer' } });

        // Trigger the search action (e.g., by clicking a search button or using Enter)
        // ... implement based on your search trigger mechanism

        // Find the search results container
        const searchResults = wrapper.find('.search-results'); // Adjust selector as needed

        // Verify that only matching games are displayed
        searchResults.forEach((result) => {
        expect(result.textContent).toMatch(/indie/i);
        expect(result.textContent).toMatch(/platformer/i);
        });
    });

    test('Search filters function correctly', () => {
        // ... similar structure as above, but interact with filter elements
        // and verify that results are filtered accordingly
    });
