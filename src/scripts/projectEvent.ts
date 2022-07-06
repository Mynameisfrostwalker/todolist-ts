import { displayTodo } from "./displayItems";


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

export { changeProject }