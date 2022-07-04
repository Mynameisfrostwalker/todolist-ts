import { correctDateProjects } from "./projects";
import uniqid from "uniqid";

type Properties = "title" | "description" | "dueDate" | "priority" | "complete" | "id";

class Items {
    private title: string;
    private description: string;
    private dueDate: string;
    private priority: string;
    private complete: string;
    private id = uniqid();
    constructor(title: string, description: string, dueDate: string, priority: string, complete: string) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
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