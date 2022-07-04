import { isToday, isThisWeek } from "date-fns";
import { Items } from "./todo-items";
import { displayTodo } from "./displayItems";

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
}

function deleteProject(name: string): void {
    delete projectsObj[name];
}

function replaceProject(name: string, value: Items[]): void {
    projectsObj[name] = value;
    putIntoDateProjects(value);
}

function getAllProjects(): ProjectsInterface {
    return Object.assign({}, projectsObj)
}


export {  
    createProject,
    getProject,
    updateProject,
    deleteProject,
    replaceProject,
    getAllProjects, 
    correctDateProjects
 }
