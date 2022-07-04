import { Items } from "./todo-items";
import { getProject, updateProject } from "./projects";


function getCurrentProject() {
    const project = document.querySelector(".active");
    return project?.id;
}


function showForm() {
    const formShowButton = document.querySelector(".form-show");
    const formContainer = document.querySelector(".form");
    formShowButton?.classList.add("none");
    formContainer?.classList.remove("none");
    const form = document.querySelector("form");
    form?.addEventListener("submit", submitForm);
}

function removeForm() {
    const formShowButton = document.querySelector(".form-show");
    const formContainer = document.querySelector(".form");
    formShowButton?.classList.remove("none");
    formContainer?.classList.add("none");
    const form = document.querySelector("form");
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


export { showForm, deleteForm }
