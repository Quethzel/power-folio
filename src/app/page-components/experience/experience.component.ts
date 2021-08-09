import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from 'src/app/interfaces/IWorkExperience';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperiences!: IWorkExperience[];

  
  constructor(private profileService: ProfileService) {
    this.profileService.getWorkExperience().subscribe(workExp => {
      this.workExperiences = workExp;
      this.workExperiences.forEach(w => {
        w.duration = this.duration(w.startDate, w.endDate);
        w.stack.sort((a, b) => a.technology.length - b.technology.length);
      })
    });
  }

  ngOnInit(): void { }

  private duration(initDate: Date, endDate:Date | null) {
    endDate = endDate != null ? endDate : new Date();

    let months;
    let years = 0;
    months = (endDate.getFullYear() - initDate.getFullYear()) * 12;
    months -= initDate.getMonth();
    months += endDate.getMonth();
    while(months >= 12) {
      months -= 12;
      years++;
    }
    
    let yearsText = '';
    let monthText = '';

    if (years > 0) {
      yearsText = years == 1 ? `${years} year` : `${years} years`;
    }

    if (months > 0) {
      monthText = months == 1 ? `${months} month` : `${months} months`;
    }

    return (years > 0 && months > 0)
      ? `${yearsText}, ${monthText}` 
      : `${yearsText} ${monthText}`;
  }

}
