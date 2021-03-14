var searchForm = document.querySelector(".search-form"),
    searchButton = document.querySelector(".search-button");
searchForm.classList.remove(".show-search-form"),
    searchButton.addEventListener("click", function (t) {
        t.preventDefault(), searchForm.classList.toggle("show-search-form");
    })
