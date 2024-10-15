const newsApiKey = "d7d0f279dca045a1a006ae71c1c68a00";

const healthCategory = document.querySelector("#health");
healthCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("health");
});
const sportsCategory = document.querySelector("#sports");
sportsCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("sports");
});
const entertainmentCategory = document.querySelector("#entertainment");
entertainmentCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("entertainment");
});
const technologyCategory = document.querySelector("#technology");
technologyCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("technology");
});
const businessCategory = document.querySelector("#business");
businessCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("business");
});
const scienceCategory = document.querySelector("#science");
scienceCategory.addEventListener("click", (e) => {
    e.preventDefault();
    fetchNews("science");
});

const fetchNews = async (category) => {
    try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsApiKey}`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const news = await res.json();
        const newsBox = document.querySelector("#newsBox");

        // Clear previous news articles
        newsBox.innerHTML = "";

        news.articles.forEach((article) => {
            if(article.title!="[Removed]"){
                newsBox.innerHTML += `
                <div class="col shadow mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src=${article.urlToImage !=null  ? article.urlToImage :"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text text-sm">${article.description?article.description:""}</p>
                            <a href="${article.url}" class="btn btn-danger">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            }
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};

if(window.location.pathname==="/"){
    fetchNews("general");
}
