import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from 'src/app/interfaces/IWorkExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperiences: IWorkExperience[];

  
  constructor() {
    this.workExperiences = [
      {
        company: 'Bray Inc.',
        role: 'Sr. Full Stack Developer Enterprise',
        startDate: new Date(),
        endDate: null,
        responsabilities: [
          { description: 'Develop new custom web applications that interact with Dynamics 365' },
          { description: 'I worked closely with the Bussines Analyses and the Product Owner to develop a custom app that has embed into CRM.' },
          { description: 'Architected and implemented front-end app to do operate process with CRM using the Dynamics XRM Web API and some custom APIs.' },
          { description: 'Build custom APIs using Microsoft Dataverse WEB API' },

        ],
        stack: [
          { technology: 'Angular', isMain: true },
          { technology: 'Net Framework', isMain: false },
          { technology: 'AG Grid', isMain: true },
          { technology: 'Azure DevOps', isMain: true },
          { technology: 'Azure Cognitive Services', isMain: false },
          { technology: 'Git', isMain: true },
          { technology: 'MS CRM', isMain: true },
          { technology: 'SQL Server', isMain: false }
        ]
      },
      {
        company: 'Neoris',
        role: 'Sr. Full Stack Developer',
        startDate: new Date(),
        endDate: null,
        responsabilities: [
          { description: 'Develop new custom web applications that interact with Dynamics 365' },
          { description: 'I worked closely with the Bussines Analyses and the Product Owner to develop a custom app that has embed into CRM.' },
          { description: 'Architected and implemented front-end app to do operate process with CRM using the Dynamics XRM Web API and some custom APIs.' },
          { description: 'Build custom APIs using Microsoft Dataverse WEB API' },
          { description: 'Fix issue in production' }
        ],
        stack: [
          { technology: 'Angular', isMain: true },
          { technology: 'Azure DevOps', isMain: true },
          { technology: 'Net Core', isMain: false },
          { technology: 'Git', isMain: true },
          { technology: 'SQL Server', isMain: false }
        ]
      },
      {
        company: 'LIS',
        role: 'Developer Architecht',
        startDate: new Date(),
        endDate: null,
        responsabilities: [
          { description: 'Develop new custom web applications that interact with Dynamics 365' },
          { description: 'I worked closely with the Bussines Analyses and the Product Owner to develop a custom app that has embed into CRM.' },
          { description: 'Architected and implemented front-end app to do operate process with CRM using the Dynamics XRM Web API and some custom APIs.' },
          { description: 'Build custom APIs using Microsoft Dataverse WEB API' },

        ],
        stack: [
          { technology: 'AngularJs', isMain: true },
          { technology: 'Net Framework', isMain: false },
          { technology: 'Google Maps API', isMain: true },
          { technology: 'SVN', isMain: true },
          { technology: 'SQL Server', isMain: true }
        ]
      },
    ];
  }

  ngOnInit(): void { }

}
