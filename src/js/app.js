import "../scss/app.scss";
import * as R from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const arrayToPluck = [
        { name: "John", class: "is-primary" },
        { age: 23, class: "is-warning" },
        { job: "programmer", class: "is-danger" },
    ];
    const articles = document.querySelectorAll("article");
    let getClases = R.pluck('class')(arrayToPluck);

    articles[0].classList.add(getClases[0]);
    articles[1].classList.add(getClases[1]);
    articles[2].classList.add(getClases[2]);

});