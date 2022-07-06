import { Items } from "./todo-items";
import { getProject, updateProject } from "./projects";


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

            console.log(e.target[0]);
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
                    project.splice(i, 1);
                }
            }
            updateProject(projectName);
        }
    }

}

function submitEditedForm() {

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
                }
            }
        }
    }
}


export { showForm, deleteForm, editForm }
