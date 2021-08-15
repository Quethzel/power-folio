import { Component } from '@angular/core';

@Component({
  selector: 'app-credtis',
  templateUrl: './credtis.component.html',
  styleUrls: ['./credtis.component.scss']
})
export class CredtisComponent {
  lastUpdate: string;
  constructor() {
    this.lastUpdate ='15.08.2021 18:22';
  }

}
