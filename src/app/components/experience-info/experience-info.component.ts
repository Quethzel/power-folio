import { Component, Input, OnInit } from '@angular/core';
import { IWorkExperience } from 'src/app/interfaces/IWorkExperience';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss']
})
export class ExperienceInfoComponent implements OnInit {
  @Input() work!: IWorkExperience;

  constructor() { }

  ngOnInit(): void { }

}
