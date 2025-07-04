/*
Definition:
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
*/
interface Button {
    render(): void;
}

interface Checkbox {
    render(): void;
}

class LightButton implements Button {
    render() {
        console.log('created a light theme button')
    }
}

class DarkButton implements Button {
    render() {
        console.log('created a dark theme button')
    }
}

class LightCheckBox implements Checkbox {
    render(): void {
        console.log('created a light theme checkbox')
    }
}

class DarkCheckBox implements Checkbox {
    render(): void {
        console.log('created a dark theme checkbox')
    }
}

interface UIFactory {
    createButton(): Button;
    createCheckox(): Checkbox;
}

class LightThemeFactory implements UIFactory {
    createButton(): Button {
        return new LightButton();
    }
    createCheckox(): Checkbox {
        return new LightCheckBox();
    }
}

class DarkThemeFactory implements UIFactory {
    createButton(): Button {
        return new DarkButton();
    }
    createCheckox(): Checkbox {
        return new DarkCheckBox();
    }
}

function configureUI(factory: UIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckox();
    button.render();
    checkbox.render();
}

const lightTheme = new LightThemeFactory();
configureUI(lightTheme);

const darkTheme = new DarkThemeFactory();
configureUI(darkTheme);
