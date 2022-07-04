import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import { showForm } from "./todoEvent";

const formShowButton = document.querySelector(".form-show");

window.addEventListener("DOMContentLoaded", () => {
    formShowButton?.addEventListener("click", showForm);
})
