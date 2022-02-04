const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    //console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
        // remove active class from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            // targetting the btn we click on and adding the active class on it
            e.target.classList.add("active");
        });
        // staying inside if cz we dont want to do anythng if we dont click on the btn

        //hide all other articles and show article with matching article
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }

});