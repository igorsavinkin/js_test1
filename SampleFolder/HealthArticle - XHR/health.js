var xhr = new XMLHttpRequest();
var url = './health.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.send();

xhr.onload = (e) => {
    var articles = xhr.response.articles;  
 
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.id + ". " + article.title;

        var description = document.createElement('p');
        description.textContent = article.description; 

        articleDiv.appendChild(title);
        articleDiv.appendChild(description); 

        articlesDiv.appendChild(articleDiv);
    });

};