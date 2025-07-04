/*
Definition:
Lets you ensure that a class has only one instance, while providing a global access point to this instance.
*/
class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config = {}
    private constructor() {
        this.config = {
            'dbConnection': 'aws://123/dp',
            'apiKey': '1234',
            'redis': '1232d'
        }
    }
    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }
    public getConfig(key: string) {
        return this.config[key];
    }
}

const config = ConfigurationManager.getInstance();

const config2 = ConfigurationManager.getInstance();

console.log(config === config2);