/* 
Definition:
Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
*/

interface FileDetails {
    name: string
    open(): void
}

class NormalFile implements FileDetails {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public open() {
        console.log("opened file " + this.name)
    }
}

//decorator
class DecoratorFile implements FileDetails {
    private file: FileDetails;
    constructor(file: FileDetails) {
        this.file = file
    }
    public open() {
        this.file.open();
    }
    get name(): string {
        return this.file.name;
    }
    public rename(newName: string) {
        this.file.name = newName;
    }
}

const file = new NormalFile('file1.txt');
file.open()

const decorator = new DecoratorFile(file);

decorator.rename('file2.txt')

decorator.open();

