import uniqid from "uniqid";
import { displayTodo } from "./displayItems";
import { createProject, doesProjectExist, deleteProject, updateProject, getAllProjects } from "./projects";


function changeProject(e: Event) {
    const active = document.querySelector(".active");
    const addItemButton = document.querySelector(".add-item");
    active?.classList.remove("active");
    if(e.target instanceof HTMLElement) {
        e.target.classList.add("active");
        if(e.target?.id === "today" || e.target?.id === "thisWeek") {
            if(!addItemButton?.classList.contains("none")) {
                addItemButton?.classList.add("none");
            }
        }else if(addItemButton?.classList.contains("none")) {
            addItemButton?.classList.remove("none");
        }
        displayTodo();
    }
}

function deleteProjectDOM(e: Event) {
    e.stopPropagation();
    const element = e.target;
    if(element instanceof HTMLElement) {
        const parent = element.parentElement;
        const id = parent?.id;
        if(id) {
            deleteProject(id);
            parent.remove();
        }
    }

    const active = document.querySelector(".active");
    if(!active) {
        const defaultProject = document.querySelector("#default");
        defaultProject?.classList.add("active");
        updateProject("default");
    }
}

function submitInput(e: Event) {
    if(e instanceof KeyboardEvent) {
        if(e.key === "Enter") {
            const input = document.querySelector("#project-input");
            const ul = document.querySelector(".projects-list");
            const li = document.querySelector(".add-projects-list");
            const newli = document.createElement("li");
            const iDiv = document.createElement("div");
            const i = document.createElement("i");
            i.classList.add("fas", "fa-window-close");
            iDiv.addEventListener("click", deleteProjectDOM);
            iDiv.appendChild(i);
            
            if(input instanceof HTMLInputElement) {
                const value = input?.value || uniqid(); 
                if(doesProjectExist(value)) {
                    input.value = "Name taken!";
                    return;
                }
                createProject(value);
                newli.textContent = value;
                newli.id = value;
                newli.classList.add("project");
                newli.appendChild(iDiv);
                ul?.insertBefore(newli, li);
                input.classList.add("none");
                input.value = "";
                newli.addEventListener("click", changeProject);
            }
        }
    }
}

function showProjectInput() {
    const input = document.querySelector("#project-input");
    if(input?.classList.contains("none")) {
        input.classList.remove("none");
        input.addEventListener("keydown", submitInput);
    }
}

function showProjects() {
    const obj = getAllProjects();
    const keys = Object.keys(obj);
    const ul = document.querySelector(".projects-list");
    const li = document.querySelector(".add-projects-list");
    for (let j = 0; j < keys.length; j++) {
        if(keys[j] !== "default" && keys[j] !== "today" && keys[j] !== "thisWeek") {
            const newli = document.createElement("li");
            const iDiv = document.createElement("div");
            const i = document.createElement("i");
            i.classList.add("fas", "fa-window-close");
            iDiv.addEventListener("click", deleteProjectDOM);
            iDiv.appendChild(i);
            newli.textContent = keys[j];
            newli.id = keys[j];
            newli.classList.add("project");
            newli.appendChild(iDiv);
            ul?.insertBefore(newli, li);
            newli.addEventListener("click", changeProject);
        }
    }
}


export { changeProject, showProjectInput, showProjects }