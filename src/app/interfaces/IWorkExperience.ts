import { IResponsability } from "./IResponsability";
import { IStack } from "./IStack";

export interface IWorkExperience {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | null;
    duration?: string;
    responsabilities: IResponsability[]
    stack: IStack[]
}

