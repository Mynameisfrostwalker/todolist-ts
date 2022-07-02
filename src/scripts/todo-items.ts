import { correctDateProjects } from "./projects";

type Properties = "title" | "description" | "dueDate" | "priority";

class Items {
    private title: string;
    private description: string;
    private dueDate: string;
    private priority: string;
    constructor(title: string, description: string, dueDate: string, priority: string) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    public getProperty(name: Properties): string {
        return this[name];
    }

    public setProperty(name: Properties, value: string): void {
            this[name] = value;
            correctDateProjects()
    }
}

export { Items }