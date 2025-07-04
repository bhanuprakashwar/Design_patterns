interface IUserXML {
    getUserXML(): string;
}

class UserXML implements IUserXML {
    public getUserXML(): string {
        return `<user><name>Bhanu</name><email>something@gmail.com</email></user>`
    }
}

interface IUserJSON {
    getUserJSON(): Object;
}

class UserAdaptor implements IUserJSON {
    private xml: IUserXML;
    constructor(xml: IUserXML) {
        this.xml = xml
    }
    getUserJSON(): Object {
        const userXML = this.xml.getUserXML();
        const match = userXML.match(/<name>(.*?)<\/name><email>(.*?)<\/email>/);
        return match ? { name: match[1], email: match[2] } : {}; // match[0] contains entire XML
    }
}
const userXML = new UserXML();
const userAdaptor = new UserAdaptor(userXML);
console.log(userAdaptor.getUserJSON());