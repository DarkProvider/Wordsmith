const search = document.getElementById('searchButton');
const results = document.getElementById('results');

const question = document.getElementById('question');
const category = document.getElementById('category');
const subcategory = document.getElementById('subcategory');

search.addEventListener('click', async () => {
    if (category.value === 'rel_') {
        await fetch('https://api.datamuse.com/words?' + category.value + subcategory.value + '=' + question.value).then(response => response.json()).then(result => handle(result));
    } else {
        await fetch('https://api.datamuse.com/words?' + category.value + '=' + question.value).then(response => response.json()).then(result => handle(result));
    }
});

function handle(response) {
    results.innerHTML = '';

    response.forEach((result) => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        resultElement.innerHTML = result.word;

        results.appendChild(resultElement);
    });
}