import { Items } from "./todo-items";

interface ProjectsInterface {
    [index: string]: Items[],
    default: Items[],
    today: Items[],
    thisWeek: Items[],
}

interface ProjectsMethod {
    createProject(name: string): void,
    getProject(name: string): Items[],
    updateProject(name: string, value: Items): void,
    deleteProject(name: string): void,
    replaceProject(name: string, value: Items[]): void,
    getAllProjects(): ProjectsInterface
}

const Projects = (
    function() {
        const projectsObj: ProjectsInterface = {
            default: [],
            today: [],
            thisWeek: []
        }

        function createProject(name: string): void {
                projectsObj[name] = [];
        };
    
        function getProject(name: string): Items[] {
            return projectsObj[name]
        }

        function updateProject(name: string, value: Items): void {
            projectsObj[name].push(value);
        }

        function deleteProject(name: string): void {
            delete projectsObj[name];
        }

        function replaceProject(name: string, value: Items[]): void {
            projectsObj[name] = value
        }

        function getAllProjects(): ProjectsInterface {
            return Object.assign({}, projectsObj)
        }

        const obj: ProjectsMethod = {
            createProject,
            getProject,
            updateProject,
            deleteProject,
            replaceProject,
            getAllProjects
        }

        return obj
        
    }
)()

export { Projects }
