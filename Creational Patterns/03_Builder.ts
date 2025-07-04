/*
Definition:
Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
*/

class ConcreteResume {
    name: string;
    experience: number;
    educationDetails: Object;
    employmentDetails: Object;
    skills: string[];
    hobbies: string[];

    constructor(name, experience, educationsDetails, employmentDetails, skills, hobbies) {
        this.name = name;
        this.experience = experience;
        this.educationDetails = educationsDetails;
        this.employmentDetails = employmentDetails;
        this.skills = skills;
        this.hobbies = hobbies;
    }
}

interface Resume {
    addExperience(years: number): Resume;
    addEducationDetails(ed: Object): Resume;
    addEmploymentDetails(emp: Object): Resume;
    addSkills(skills: string[]): Resume;
    addHobbies(hobbies: string[]): Resume;
    build(): ConcreteResume;
}

class ResumeBuilder implements Resume {
    private name: string;
    private experience: number = 0;
    private educationDetails: Object = {};
    private employmentDetails: Object = {};
    private skills: string[] = [];
    private hobbies: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addExperience(years: number): Resume {
        this.experience = years;
        return this;
    }

    addEducationDetails(ed: Object): Resume {
        this.educationDetails = ed;
        return this;
    }

    addEmploymentDetails(emp: Object): Resume {
        this.employmentDetails = emp;
        return this;
    }

    addSkills(skills: string[]): Resume {
        this.skills = skills;
        return this;
    }

    addHobbies(hobbies: string[]): Resume {
        this.hobbies = hobbies;
        return this
    }

    build(): ConcreteResume {
        const resume = new ConcreteResume(this.name, this.experience, this.educationDetails, this.employmentDetails, this.skills, this.hobbies);
        // or, if we dont want a class, then directly create and object like "resume = {name: this.name....}"
        return resume;
    }
}

const resumeBuilder = new ResumeBuilder('Bhanu');
resumeBuilder.addExperience(6)
    .addEmploymentDetails({ companies: ['Factset', 'UHG'] })
    .addEducationDetails({ bTech: "CMR" })
    .addSkills(['not Found'])
    .addHobbies(['travel'])
    .build()

console.log(resumeBuilder);