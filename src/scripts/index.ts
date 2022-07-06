import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import { showForm } from "./todoEvent";
import { changeProject } from "./projectEvent";

const formShowButton = document.querySelector(".form-show");
const projects = document.querySelectorAll(".project");

window.addEventListener("DOMContentLoaded", () => {
    formShowButton?.addEventListener("click", showForm);

    projects.forEach((project) => {
        project.addEventListener("click", changeProject)
    })
})
