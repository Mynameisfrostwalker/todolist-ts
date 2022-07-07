import { ProjectsInterface } from "./projects";
import { Items } from "./todo-items";
import { createProject, updateProject} from "./projects";
import { showProjects } from "./projectEvent";

function getProjects() {
    let projectsObj = localStorage.getItem("todo0bj");
    if(projectsObj) {
        let obj = JSON.parse(projectsObj);
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if(keys[i]  === "today" || keys[i] === "thisWeek") {
                continue;
            }
            if(keys[i] !== "default") {
                createProject(keys[i])
            }
            let arr = obj[keys[i]];
            for (let j = 0; j < arr.length; j++) {
                let item = new Items(
                    arr[j].title,
                    arr[j].description,
                    arr[j].dueDate,
                    arr[j].priority,
                    arr[j].complete
                    );
                updateProject(keys[i], item);
            }
        }
    }
    showProjects();
}

function setProjects(obj: ProjectsInterface) {
    localStorage.setItem("todo0bj", JSON.stringify(obj));
}

export { getProjects, setProjects }