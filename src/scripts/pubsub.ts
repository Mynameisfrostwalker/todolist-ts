type Anyfunctions = (...args: any[]) => void;

interface Events {
    [index: string]: Anyfunctions[],  
}

const events: Events = {
        // key: eventname, value: [funcs]
};

interface Unsubscribe {
    unsubscribe: () => void;
}

const subscribe = (eventName: string, func: (...args: any[]) => void): Unsubscribe => {
    if(events[eventName]) {
        events[eventName].push(func);
    } else {
        events[eventName] = [func];
    }
    return {
        unsubscribe: () => {
            const funcs = events[eventName];
            const idx = funcs.indexOf(func);
            if(idx > -1) {
                funcs.splice(idx, 1)
            }
        }
    }
};

const publish  = (eventName: string, ...args: any[]): void => {
    const funcs = events[eventName];
    if(Array.isArray(funcs)) {
        funcs.forEach((func) => {
            func.apply(null, args);
        })
    }
};

export {publish, subscribe}