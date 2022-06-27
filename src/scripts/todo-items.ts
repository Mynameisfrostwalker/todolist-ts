type Properties = "title" | "description" | "dueDate" | "priority";

class Items {
    private title: string;
    private description: string;
    private dueDate: Date;
    private priority: string;
    constructor(title: string, description: string, dueDate: Date, priority: string) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    public getProperty(name: Properties): string | Date {
        return this[name];
    }

    public setProperty(name: Properties, value: string | Date): void {
        if(name === "dueDate" && typeof value === "object") {
            this[name] = value;
        } else if (name !== "dueDate" && typeof value === "string") {
            this[name] = value
        }
    }
}

export { Items }