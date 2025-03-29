export interface PersonalInfo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    dateOfBirth: string;
    nationality: string;
    language: string;
    phoneNumberOne: string;
    phoneNumberTwo: string;
    address: string;
    profilePicture: string;
}

export interface Skill {
    title: string;
    desc: string;
    rate: number;
}

export interface SkillCategory {
    title: string;
    overview: string;
    skills: Skill[];
    icon: string;
    type: string;
}