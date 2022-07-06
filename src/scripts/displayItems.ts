import { formatDistanceToNow } from "date-fns";
import { Items } from "./todo-items"
import { getProject } from "./projects";
import { deleteForm, editForm } from "./todoEvent";

function getCurrentProject() {
    const project = document.querySelector(".active");
    return project?.id;
}

function createInfo(item: Items) {
    const info = document.createElement("div");
    info.classList.add("info");

    const p1 = document.createElement("p");
    p1.textContent = item.getProperty("title");
    info.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = formatDistanceToNow(new Date(item.getProperty("dueDate")), {addSuffix: true});
    info.appendChild(p2);
    return info;
}

function createControls(item: Items) {
    const controls = document.createElement("div");
    controls.classList.add("control");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = item.getProperty("complete") === "complete" ? true : false;
    input.name = "complete";
    input.id = "complete";
    controls.appendChild(input);

    const alterDiv = document.createElement("div");
    alterDiv.classList.add("alter-items");

    const div1 = document.createElement("div");
    const i1 = document.createElement("i");
    i1.classList.add("fas", "fa-edit");
    div1.addEventListener("click", editForm, true);
    div1.appendChild(i1);
    alterDiv.appendChild(div1);

    const div2 = document.createElement("div");
    const i2 = document.createElement("i");
    i2.classList.add("fas", "fa-trash-alt");
    div2.addEventListener("click", deleteForm, true);
    div2.appendChild(i2);
    alterDiv.appendChild(div2);
    controls.appendChild(alterDiv);

    return controls
    
}

/*
function displaycTodo() {

    const projectName = getCurrentProject();
    const main = document.querySelector("main");
    const add = document.querySelector(".add-item");
    const children = main?.children;
    const arr: Element[] = [];
    if(children) {
        for (let i = 0; i < children.length; i++) {
            if(children[i].classList.contains("todo")) {
                arr.push(children[i])
            }
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }
    }

    if(projectName) {

        const items = getProject(projectName);
        for(let i = 0; i < items.length; i++) {

            const item = items[i];
            const priority = item.getProperty("priority");

            const divItem = document.createElement("div");
            divItem.classList.add("item");
            divItem.classList.add(priority);
            divItem.classList.add("todo");
            divItem.id = item.getProperty("id");
            divItem.appendChild(createInfo(item));
            divItem.appendChild(createControls(item));
            main?.insertBefore(divItem, add);

        }
    }
}
*/

function displayTodo() {

    const projectName = getCurrentProject();
    const main = document.querySelector("main");
    const add = document.querySelector(".add-item");
    const children = main?.children;
    let arr: Element[] = [];
    let arr2: Element[] = [];
    let projectArr: Items[] = [];
    if(children) {
        for (let i = 0; i < children.length; i++) {
            if(children[i].classList.contains("todo")) {
                arr.push(children[i])
            }
        }
        // Delete todo item
        if(projectName) {
            const project = getProject(projectName);
            arr = arr.filter((item) => {
                for (let i = 0; i < project.length; i++) {
                    if(item.id === project[i].getProperty("id")) {
                        return false;
                    }
                }
                return true;
            })
        }
        arr.forEach((item) => {
            item.remove();
        })

        //Add todo item to screen
        for (let i = 0; i < children.length; i++) {
            if(children[i].classList.contains("todo")) {
                arr2.push(children[i])
            }
        }

        if(projectName) {
            const project = getProject(projectName);
            projectArr = project.filter((item) => {
                for (let i = 0; i < arr2.length; i++) {
                    if(arr2[i].id === item.getProperty("id")) {
                        return false;
                    }
                }
                return true;
            })
        }

    }

    if(projectName) {

        const items = getProject(projectName);
        for(let i = 0; i < projectArr.length; i++) {

            const item = projectArr[i];
            const priority = item.getProperty("priority");

            const divItem = document.createElement("div");
            divItem.classList.add("item");
            divItem.classList.add(priority);
            divItem.classList.add("todo");
            divItem.id = item.getProperty("id");
            divItem.appendChild(createInfo(item));
            divItem.appendChild(createControls(item));
            main?.insertBefore(divItem, add);

        }
    }
}

function displayEditedTodo(item: Items, element: HTMLElement) {
    const projectName = getCurrentProject();
    const main = document.querySelector("main");
    const add = document.querySelector(".add-item");


    const priority = item.getProperty("priority");

    const divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.classList.add(priority);
    divItem.classList.add("todo");
    divItem.id = item.getProperty("id");
    divItem.appendChild(createInfo(item));
    divItem.appendChild(createControls(item));
    main?.replaceChild(divItem, element);

}


export { displayTodo, displayEditedTodo }