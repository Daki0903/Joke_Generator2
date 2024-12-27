document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('get-started-btn');
    const jokeSection = document.getElementById('jokes');
    const jokeText = document.getElementById('joke-text');
    const jokeBtn = document.getElementById('joke-btn');
    const categorySelect = document.getElementById('category-select');

    // Show jokes section when "Start Laughing" is clicked
    getStartedBtn.addEventListener('click', () => {
        jokeSection.classList.remove('hidden');
        window.scrollTo({ top: jokeSection.offsetTop, behavior: 'smooth' });
    });

    // Fetch and display a random joke
    jokeBtn.addEventListener('click', () => {
        const category = categorySelect.value;
        const url = category === 'Any'
            ? 'https://v2.jokeapi.dev/joke/Any'
            : `https://v2.jokeapi.dev/joke/${category}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.type === 'single') {
                    jokeText.textContent = data.joke;
                } else {
                    jokeText.textContent = `${data.setup} - ${data.delivery}`;
                }
            })
            .catch(error => {
                jokeText.textContent = 'Failed to load a joke. Please try again!';
                console.error('Error fetching joke:', error);
            });
    });
});
