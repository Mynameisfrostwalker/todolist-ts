const formShowButton = document.querySelector(".form-show");

function showForm() {
    const form = document.querySelector(".form");
    formShowButton?.classList.add("none");
    form?.classList.remove("none");
}

window.addEventListener("DOMContentLoaded", () => {
    formShowButton?.addEventListener("click", showForm);
})
