var searchForm = document.querySelector(".search-form"),
    searchButton = document.querySelector(".search-button");
    indexForm = document.querySelector(".index-form");
    inputArrival = document.querySelector(".arrival-input");
    inputDeparture = document.querySelector(".departure-input");
    inputOlds = document.querySelector(".olds-input");
    inputKids = document.querySelector(".kids-input");

searchForm.classList.remove("show-search-form"),
  searchButton.addEventListener("click", function (t) {
    t.preventDefault(),
    searchForm.classList.toggle("show-search-form");
    searchForm.classList.remove("form-error");
  });

  indexForm.addEventListener("submit", function (evt) {
    if (!inputArrival.value || !inputDeparture.value || !inputOlds.value || !inputKids.value) {
      evt.preventDefault();
      searchForm.classList.remove("form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("form-error");
    }
  });
