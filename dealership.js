document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".custom-dropdown");
    const selected = dropdown.querySelector(".dropdown-selected");
    const menu = dropdown.querySelector(".dropdown-menu");
    const options = menu.querySelectorAll("li");

    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    options.forEach(option => {
        option.addEventListener("click", function () {
            selected.textContent = this.textContent;
            dropdown.classList.remove("active");
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});
