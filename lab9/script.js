

const apiKey = 'b33b229a38b29f5d044184daca0f670f'; 
const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news');
    newsContainer.innerHTML = ''; // Clear loading text

    data.articles.forEach(article => {
      const newsDiv = document.createElement('div');
      newsDiv.classList.add('news-item');

      newsDiv.innerHTML = `
        <img src="${article.image || 'https://via.placeholder.com/800x400'}" alt="News Image">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read more →</a>
      `;

      newsContainer.appendChild(newsDiv);
    });
  })
  .catch(error => {
    document.getElementById('news').innerHTML = '<p>⚠️ Failed to fetch news. Check your API key or internet connection.</p>';
    console.error('Error fetching data:', error);
  });
