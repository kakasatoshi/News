"use strict";
class News {
  constructor(page) {
    this.page = page || 1;
  }
  async fetchNews() {
    const apiKey = "05087fdb3b0447929babe12a4e18a5de";
    const country = "us";
    let tr = getFromStorage("category", true)
      ? "technology"
      : JSON.parse(getFromStorage("category", "technology"));
    console.log(tr);
    const category = tr;

    const pageSize = Number(JSON.parse(getFromStorage("pageSize", "10"))) || 10;
    const urls = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${this.page}&apikey=${apiKey}`;
    try {
      const response = await fetch(urls);
      // console.log(response);
      const data = await response.json();
      // console.log(data);

      if (data.status === "ok") {
        const articles = data.articles;
        console.log(articles);
        const newList = document.getElementById("news-list");

        ////////xóa trang////////////
        while (newList.firstChild) {
          newList.removeChild(newList.firstChild);
        }
        articles.forEach((article) => {
          const { title, description, url, urlToImage } = article;
          console.log(article);
          const li = document.createElement("li");
          const img = document.createElement("img");
          //   const a = document.createElement("a");
          const p = document.createElement("p");
          const h6 = document.createElement("h5");
          const btn = document.createElement("button");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div = document.createElement("div");

          img.src = urlToImage;
          img.classList.add("img-news");
          div1.appendChild(img);
          div1.classList.add("inline-div");
          //   a.href = url;
          h6.textContent = title;
          p.textContent = description;

          btn.innerHTML = `<a class="a-view" href="${url}">View</a>`;
          btn.classList.add("btn", "btn-primary", "btn-view");
          //   div1.className += "col col-md-auto d-flex justify-content-
          div2.appendChild(h6);
          div2.appendChild(p);
          div2.appendChild(btn);
          div2.classList.add("inline-div", "div-container-text");
          //   li.appendChild(img);
          //   li.appendChild(h6);
          //   li.appendChild(p);
          //   li.appendChild(btn);
          div.appendChild(div1);
          div.appendChild(div2);
          div.classList.add("div-container-news");
          li.appendChild(div);
          li.classList.add("li-news");
          newList.appendChild(li);
        });

        ///////////////
        const pageNumber = document.getElementById("page-num");
        pageNumber.textContent = this.page;

        const btnPrev = document.getElementById("btn-prev");
        const btnNext = document.getElementById("btn-next");

        // btnPrev.disabled = this.page === 1;
        if (this.page === 1) {
          btnPrev.classList.add("disabled-button");
        } else btnPrev.classList.remove("disabled-button");

        // btnNext.disabled =
        //   articles.length < pageSize ||
        //   this.page * pageSize >= data.totalResults;

        if (
          articles.length < pageSize ||
          this.page * pageSize >= data.totalResults
        ) {
          btnNext.classList.add("disabled-button");
        } else btnNext.classList.remove("disabled-button");
      } else console.error("Error", data.message);
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchNews();
    }
  }

  nextPage() {
    this.page++;
    this.fetchNews();
  }
}
const user = new News();

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
btnPrev.addEventListener("click", () => user.previousPage());
btnNext.addEventListener("click", () => user.nextPage());
user.fetchNews();
