import { isToday, isThisWeek } from "date-fns";
import { Items } from "./todo-items";
import { displayTodo } from "./displayItems";
import { setProjects } from "./localStorage";

interface ProjectsInterface {
    [index: string]: Items[],
    default: Items[],
    today: Items[],
    thisWeek: Items[],
}

const projectsObj: ProjectsInterface = {
    default: [],
    today: [],
    thisWeek: []
}

/**Ensures today and this week project arrays are filled with objects with appropriate date */
function correctDateProjects() {

    let today: Items[] = [];
    let thisWeek: Items[] = [];

    const keys = Object.keys(projectsObj);

    for(let i = 0; i < keys.length; i++) {

        if(keys[i] !== "today" && keys[i] !== "thisWeek") {

            let key = projectsObj[keys[i]];

            for(let j = 0; j < key.length; j++) {

                const obj = key[j];
                let date = new Date(obj.getProperty("dueDate"));

                if(isThisWeek(date)) {
                    thisWeek.push(obj);
                }

                if(isToday(date)) {
                    today.push(obj);
                }

            }
        }
    }

    projectsObj.thisWeek = thisWeek;
    projectsObj.today = today;
}

function putIntoDateProjects(para: Items | Items[]) {

    if(Array.isArray(para)) {
        for(const element of para) {
            let date = new Date(element.getProperty("dueDate"));
            if(isThisWeek(date)) {
                projectsObj.thisWeek.push(element);
            } 
            if(isToday(date)) {
                projectsObj.today.push(element);
            }
        }
        return
    }


    let date = new Date(para.getProperty("dueDate"));
    if(isThisWeek(date)) {
        projectsObj.thisWeek.push(para);
    } 
    if(isToday(date)) {
        projectsObj.today.push(para);
    }
}

function createProject(name: string): void {
    projectsObj[name] = [];
};
    
function getProject(name: string): Items[] {
    return projectsObj[name]
}

function updateProject(name: string, value?: Items): void {
    if(value) {
        projectsObj[name].push(value);
        putIntoDateProjects(value);
    }
    displayTodo();
    setProjects(projectsObj);
}

function deleteProject(name: string): void {
    delete projectsObj[name];
    correctDateProjects();
    setProjects(projectsObj);
}

function replaceProject(name: string, value: Items[]): void {
    projectsObj[name] = value;
    putIntoDateProjects(value);
}

function getAllProjects(): ProjectsInterface {
    return Object.assign({}, projectsObj)
}

function deleteTodo(name: string, index: number): void {
    if(name !== "today" && name !== "thisWeek") {
        projectsObj[name].splice(index, 1);
    } else {

        const keys = Object.keys(projectsObj);
    
        for(let i = 0; i < keys.length; i++) {
    
            if(keys[i] !== name) {
    
                let key = projectsObj[keys[i]];
    
                for(let j = 0; j < key.length; j++) {
    
                    const obj = key[j];
                    if(obj.getProperty("id") === projectsObj[name][index].getProperty("id")) {
                        key.splice(j, 1);
                    }
    
                }
            }
        }
        projectsObj[name].splice(index, 1);
    }
    setProjects(projectsObj);
}

function doesProjectExist(name: string) {
    const key = Object.keys(projectsObj);
    for(let i = 0; i < key.length; i++) {
        if(key[i] === name) {
            return true
        }
    }
    return false;
}


export {  
    createProject,
    getProject,
    updateProject,
    deleteProject,
    replaceProject,
    getAllProjects, 
    correctDateProjects,
    deleteTodo,
    doesProjectExist, 
    ProjectsInterface
 }
