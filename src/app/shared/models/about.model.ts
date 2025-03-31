export interface lh_skill {
    title: string;
    desc: string;
    rate: number;
}

export interface lh_skillCategory {
    title: string;
    overview: string;
    skills: lh_skill[];
    icon: string;
    type: string;
}