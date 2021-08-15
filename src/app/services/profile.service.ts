import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IWorkExperience } from '../interfaces/IWorkExperience';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private workExperiences: IWorkExperience[];

  constructor() {
    this.workExperiences = [
      {
        company: 'Bray Inc.',
        role: 'Sr. Full Stack Developer Enterprise',
        startDate: new Date(2019,2,12),
        endDate: null,
        responsabilities: [
          { description: 'Develop new custom web applications that interact with Dynamics 365' },
          { description: 'I worked closely with the Bussines Analyses and the Product Owner to develop a custom app that has embed into CRM.' },
          { description: 'Architected and implemented front-end app to do operate process with CRM using the Dynamics XRM Web API and some custom APIs.' },
          { description: 'Build custom APIs using Microsoft Dataverse WEB API' },

        ],
        stack: [
          { technology: 'Angular', softSkill: false },
          { technology: 'Net Framework', softSkill: false },
          { technology: 'AG Grid', softSkill: false },
          { technology: 'Azure DevOps', softSkill: false },
          { technology: 'Azure Cognitive Services', softSkill: false },
          { technology: 'Git', softSkill: false },
          { technology: 'MS CRM', softSkill: false },
          { technology: 'SQL Server', softSkill: false },
          { technology: 'Agile', softSkill: false },
        ]
      },
      {
        company: 'Neoris',
        role: 'Sr. Full Stack Engineer',
        startDate: new Date(2017, 8, 1),
        endDate: new Date(2019, 2, 10),
        responsabilities: [
          { description: 'Adding new features to existing projects and develop new apps from scratch for diverse array of clients' },
          { description: 'Lead a front-end team' },
          { description: 'Comunicate closely with designers, mobile enginirees and product owner' },
          { description: 'Build custom front end experiences using HTML Canvas and Kendo UI' },
          { description: 'External consultor for companies like Home Depot, FEMSA and ARCA providing technological expertise' }
        ],
        stack: [
          { technology: 'Angular Js', softSkill: false },
          { technology: 'Kendo UI', softSkill: false },
          { technology: 'Net Framework', softSkill: false },
          { technology: 'Git', softSkill: false },
          { technology: 'SQL Server', softSkill: false },
          { technology: 'Lead', softSkill: false },
          { technology: 'Problem solving', softSkill: false }
        ]
      },
      {
        company: 'LIS',
        role: 'Full-Stack & Team Lead',
        startDate: new Date(2014, 2, 11),
        endDate: new Date(2017, 8, 10),
        responsabilities: [
          { description: 'Architect and develop new web app' },
          { description: 'SCRUM Implementation' },
          { description: 'Lead technical projects with a small team of developers' },
          { description: 'Open Innovation and Developer department' },
          { description: 'Collaborated on migration strategy from Power Builder Desktop Apps to Angular/Net Web Apps' },
          { description: 'Implementation of Markers, Routes, Places, Directions, Roads, Distance Matrix with Google Maps API & SDK in custom app' },
          { description: 'Support L2/L3' },

        ],
        stack: [
          { technology: 'AngularJs', softSkill: false },
          { technology: 'Net Framework', softSkill: false },
          { technology: 'Google Maps API', softSkill: false },
          { technology: 'SVN', softSkill: false },
          { technology: 'SQL Server', softSkill: false },
          { technology: 'SCRUM', softSkill: false },
          { technology: 'Lead', softSkill: false }
        ]
      },
    ];
  }

  getWorkExperience() {
    return of(this.workExperiences);
  }



}
