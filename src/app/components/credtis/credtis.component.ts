import { Component } from '@angular/core';

@Component({
  selector: 'app-credtis',
  templateUrl: './credtis.component.html',
  styleUrls: ['./credtis.component.scss']
})
export class CredtisComponent {
  lastUpdate: string;
  constructor() {
    this.lastUpdate ='01.07.2021 22:30';
  }

}
