import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import { showForm } from "./todoEvent";
import { changeProject, showProjectInput } from "./projectEvent";
import { getProjects } from "./localStorage";

getProjects();

window.addEventListener("DOMContentLoaded", () => {
    const formShowButton = document.querySelector(".form-show");
    const projects = document.querySelectorAll(".project");
    const addProjectsButton = document.querySelector(".add-projects-button")

    formShowButton?.addEventListener("click", showForm);

    projects.forEach((project) => {
        project.addEventListener("click", changeProject)
    })

    addProjectsButton?.addEventListener("click", showProjectInput);
})
