var selectStar = 0;

var buttonStar = document.querySelectorAll(".starButton");

buttonStar.forEach((star) => {
    star.addEventListener("click", () => {
        buttonStar.forEach((item => {
            item.classList.remove("selected-star");
        }));

        selectStar = star.innerHTML;
        star.classList.add("selected-star");
    })
})

var submitBtn = document.querySelector(".submit-btn")
var valueView = document.querySelector(".value")
var pageView = document.querySelectorAll("main");

submitBtn.addEventListener("click", () => {
    if (selectStar == 0) {
        alert("Select at least ONE star")
    } else {
        pageView.forEach((page) => {
            if (page.hasAttribute("hidden")) {
                page.removeAttribute("hidden")
            } else {
                page.setAttribute("hidden", "true")
            }
        })

        document.querySelector(".value").innerHTML = selectStar;
    }

})