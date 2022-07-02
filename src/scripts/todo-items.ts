type Properties = "title" | "description" | "dueDate" | "priority";

class Items {
    private title: string;
    private description: string;
    private dueDate: Date;
    private priority: string;
    constructor(title: string, description: string, dueDate: string, priority: string) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
    }

    public getProperty(name: Properties): string | Date {
        return this[name];
    }

    public setProperty(name: Properties, value: string): void {
        if(name === "dueDate") {
            this[name] = new Date(value);
        } else {
            this[name] = value
        }
    }
}

export { Items }