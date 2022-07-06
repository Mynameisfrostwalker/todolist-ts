import { displayTodo } from "./displayItems";

function changeProject(e: Event) {
    const active = document.querySelector(".active");
    active?.classList.remove("active");
    if(e.target instanceof HTMLElement) {
        e.target.classList.add("active");
    }

    displayTodo();
}

export { changeProject }