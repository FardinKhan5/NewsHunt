const newsApiKey = "d7d0f279dca045a1a006ae71c1c68a00";



const fetchNews = async (category) => {
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsApiKey}`
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`// for github
        console.log("url",url)
        // console.log("proxy url",proxyUrl);
        
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const news = await res.json();
        // const news=await JSON.parse(data.contents)
        const newsBox = document.querySelector("#newsBox");

        // Clear previous news articles
        newsBox.innerHTML = "";

        news.articles.forEach((article) => {
            if(article.title!="[Removed]"){
                newsBox.innerHTML += `
                <div class="col shadow mb-3">
                    <div class="card" style="height:100%;" >
                        <img src=${article.urlToImage !=null  ? article.urlToImage :"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text text-sm">${article.description?article.description:""}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-danger">Read More</a>
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

const params = new URLSearchParams(window.location.search);
if(window.location.pathname==="/" && (!params.get("category"))){
    fetchNews("general")
}else{
    switch (params.get('category')) {
        case "business":
            fetchNews("business");
            break;
        case "health":
            fetchNews("health");
            break;
        case "science":
            fetchNews("science");
            break;
        case "entertainment":
            fetchNews("entertainment");
            break;
        case "sports":
            fetchNews("sports");
            break;
        case "technology":
            fetchNews("technology");
            break;
    }
}


