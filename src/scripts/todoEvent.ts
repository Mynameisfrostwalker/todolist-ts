import { Items } from "./todo-items";
import { getProject, updateProject, deleteTodo } from "./projects";
import { displayEditedTodo } from "./displayItems";


function getCurrentProject() {
    const project = document.querySelector(".active");
    return project?.id;
}


function showForm() {
    const addDiv = document.querySelector(".add-item");
    const formShowButton = document.querySelector(".form-show");
    const formContainer = addDiv?.querySelector(".form");
    formShowButton?.classList.add("none");
    formContainer?.classList.remove("none");
    const form = formContainer?.querySelector("form");
    form?.addEventListener("submit", submitForm);
}

function removeForm() {
    const addDiv = document.querySelector(".add-item");
    const formShowButton = document.querySelector(".form-show");
    const formContainer = addDiv?.querySelector(".form");
    formShowButton?.classList.remove("none");
    formContainer?.classList.add("none");
    const form = formContainer?.querySelector("form");
    form?.removeEventListener("submit", submitForm);
}

function submitForm(e: Event) {

        e.preventDefault();

        if(e.target instanceof HTMLFormElement) {

            const arr: string[] = [];

            for(let i = 0; i < 4; i++) {
                const element = e.target[i]
                if(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
                    arr[i] = element.value;
                    element.value = "";
                }
            }

            const title = arr[0];
            const dueDate = arr[1];
            const priority = arr[2];
            const description = arr[3];
            let item = new Items(title, description, dueDate, priority, "incomplete");
            const project = getCurrentProject();
            if(project) {
                updateProject(project, item);
                removeForm();
            }
        }
}

function deleteForm(e: Event) {
    const element = e.target;
    if(element instanceof HTMLElement) {

        const projectName = getCurrentProject();
        const item = element?.parentElement?.parentElement?.parentElement;
        const id = item?.id;

        if(projectName) {
            const project = getProject(projectName);
            for(let i = 0; i < project.length; i++) {
                const item = project[i];
                if(item.getProperty("id") === id) {
                    deleteTodo(projectName, i);
                }
            }
            updateProject(projectName);
        }
    }

}

function submitEditedForm(e: Event) {
    e.preventDefault();
    const projectName = getCurrentProject();

    if(e.target instanceof HTMLFormElement) {

        const arr: string[] = [];

        for(let i = 0; i < 4; i++) {
            const element = e.target[i]
            if(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
                arr[i] = element.value;
                element.value = "";
            }
        }

        const title = arr[0];
        const dueDate = arr[1];
        const priority = arr[2];
        const description = arr[3];
        const complete = e.target.parentElement?.getAttribute("data-complete");
        const id = e.target.parentElement?.id;
        const parent = e.target.parentElement;
        let item: Items;
        if(projectName) {
            const projects = getProject(projectName);
            for(let i = 0; i < projects.length; i++) {
                if(id === projects[i].getProperty("id")) {
                    projects[i].setProperty("title", title);
                    projects[i].setProperty("dueDate", dueDate);
                    projects[i].setProperty("description", description);
                    projects[i].setProperty("priority", priority);
                    projects[i].setProperty("complete", complete || "complete");
                    item = projects[i];
                    if(parent) {
                        displayEditedTodo(item, parent);
                        updateProject(projectName);
                    }
                }
            }
        }
    
    }
}

function editForm(e: Event) {
    const element = e.target;
    let propArr = [];
    if(element instanceof HTMLElement) {

        const main = document.querySelector("main");
        const projectName = getCurrentProject();
        const item = element?.parentElement?.parentElement?.parentElement;
        const id = item?.id;
        const form = document.querySelector(".form")?.cloneNode(true);

        if(projectName) {
            const project = getProject(projectName);
            for(let i = 0; i < project.length; i++) {
                const item = project[i];
                if(item.getProperty("id") === id) {
                    propArr[0] = item.getProperty("title");
                    propArr[1] = item.getProperty("dueDate");
                    propArr[2] = item.getProperty("priority");
                    propArr[3] = item.getProperty("description");
                    propArr[4] = item.getProperty("complete");
                    propArr[5] = item.getProperty("id");
                }
            }
            if(form instanceof HTMLElement && item) {
                form.classList.remove("none");
                main?.replaceChild(form, item);
                form.classList.add("todo");
                const realform = form.querySelector("form");
                realform?.removeEventListener("submit", submitForm);
                if(realform) {
                    for(let i = 0; i < 4; i++) {
                        const element = realform[i]
                        if(element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
                            element.value = propArr[i];
                        }
                    }
                    form.setAttribute("data-complete", propArr[4]);
                    form.id = propArr[5];
                    form.addEventListener("submit", submitEditedForm);
                }
            }
        }
    }
}

function toggleComplete(e: Event) {
    const element = e.target;
    const projectName = getCurrentProject();
    if(element instanceof HTMLInputElement) {
        const parent = element.parentElement?.parentElement;
        const id = parent?.id;
        if(id && projectName) {
            const project = getProject(projectName);
            for(let i = 0; i < project.length; i++) {
                if(id === project[i].getProperty("id")) {
                    const complete = element.checked ? "complete" : "incomplete";
                    project[i].setProperty("complete", complete);
                    if(complete === "complete") {
                        parent.classList.add("blur");
                    } else {
                        parent.classList.remove("blur");
                    }
                }
            }
        }
    }
}

export { showForm, deleteForm, editForm, toggleComplete }
