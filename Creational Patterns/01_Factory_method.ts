/*
Definition:
The Factory Method pattern lets a class decide which specific object to create by deferring that choice to its subclasses.
Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
Factory Method decides 1-of-N implementations of one interface,  
*/

interface Button {
    render(): void;
}

class PrimaryButton implements Button {
    render() {
        console.log("Rendering Primary Button");
    }
}
class SecondaryButton implements Button {
    render() {
        console.log("Rendering Secondary Button");
    }
}
class IconButton implements Button {
    render() {
        console.log("Rendering Icon Button");
    }
}

class FactoryMethod {
    createButton(type: string): Button {
        switch (type) {
            case 'primary':
                return new PrimaryButton();
            case 'secondary':
                return new SecondaryButton();
            case 'icon':
                return new IconButton();
            default:
                throw new Error('Button type not recognized');
        }
    }
}

const factory = new FactoryMethod();
const iconButton = factory.createButton('icon');
iconButton.render()