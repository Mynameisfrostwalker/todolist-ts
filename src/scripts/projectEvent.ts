import uniqid from "uniqid";
import { displayTodo } from "./displayItems";
import { createProject, doesProjectExist } from "./projects";


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
            iDiv.appendChild(i);
            
            if(input instanceof HTMLInputElement) {
                const value = input?.value || uniqid(); 
                if(doesProjectExist(value)) {
                    input.value = "Name has been used!";
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


export { changeProject, showProjectInput }