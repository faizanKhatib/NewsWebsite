// api key  = 934a99299ad54005a86a3e8289472f06;
// news = https://newsapi.org/v2/top-headlines?country=il&apiKey=

let newsAccordion = document.getElementById("newsAccordion");
let source = "bbc-news";
let apiKey = "934a99299ad54005a86a3e8289472f06";


const xhr = new XMLHttpRequest();
xhr.open(
  "GET",`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true
  // "GET",'https://newsapi.org/v2/top-headlines?country=ca&apiKey=934a99299ad54005a86a3e8289472f06',true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
        <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="false" aria-controls="collapse${index}">
                <b>Breaking News ${index + 1}:</b> ${element["title"]}
            </button>
            </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body"> ${element["content"]}. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
        </div>
    </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
  
  

