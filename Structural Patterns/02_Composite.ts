/* 
Definition:
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.\
"Composite":
The name implies a composition (i.e., combining multiple parts into one).
It’s about combining objects in a way that they form a tree.
*/

// RootFolder
// ├── File1.txt         ← Leaf
// └── Folder         ← Composite
//     ├── File2.txt     ← Leaf
//     └── File3.txt     ← Leaf
// we have have n number of folder structure which is actually the tree pattern

interface FileSystemInfo {
    open(): void
}

//Leaf
class FileInfo implements FileSystemInfo {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public open() {
        console.log("opened file " + this.name)
    }
}

//Composite
class FolderInfo implements FileSystemInfo {
    private name: string;
    private listOfFiles: FileSystemInfo[] = [];
    constructor(name: string) {
        this.name = name;
    }
    public open() {
        console.log("Opening " + this.name)
        for (const file of this.listOfFiles) {
            file.open()
        }
    }
    public add(file: FileSystemInfo) {
        this.listOfFiles.push(file);
    }
}

const file1 = new FileInfo('file1.txt');
const file2 = new FileInfo('file2.txt');
const file3 = new FileInfo('file3.txt');
file1.open();

const folder = new FolderInfo('Folder');
folder.add(file2);
folder.add(file3);

folder.open();