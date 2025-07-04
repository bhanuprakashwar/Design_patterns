/* 
Definition:
Lets you copy existing objects without making your code dependent on their classes.
*/

interface CustomButton {
    render(): void;
    clone(): CustomButton;
}

class Prototype implements CustomButton {
    public label: string;
    public metadata: Object;
    constructor(label: string, metadata: Object) {
        this.label = label;
        this.metadata = metadata;
    }

    render() {
        console.log('Button has been rendered with ' + this.label);
    }

    clone(): Prototype {
        const clone = Object.create(Object.getPrototypeOf(this)); // to have same prototye
        return Object.assign(clone, structuredClone(this)); // for deep copy
    }
}

const button = new Prototype('sample', {});
const newButton = button.clone();

console.log(button === newButton);
console.log(newButton instanceof Prototype);
