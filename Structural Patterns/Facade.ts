/* 
Definition:
Provides a simplified, unified interface to a complex system of classes, making it easier to interact with the system's functionality
*/

interface Post {
    post(): void
}

class Instagram implements Post {
    public post() {
        console.log("Post on Instagram");
    }
}

class X implements Post {
    public post() {
        console.log("Post on X");
    }
}

class SnapChat implements Post {
    public post() {
        console.log("Post on SnapChat");
    }
}

//Facade
class Publish {
    private instagram = new Instagram();
    private x = new X();
    private snapchat = new SnapChat();

    publish(): void {
        this.instagram.post();
        this.x.post();
        this.snapchat.post();
    }
}

const publisher = new Publish()
publisher.publish();