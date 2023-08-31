import { Component } from '@angular/core';

@Component({
  selector: 'app-credtis',
  templateUrl: './credtis.component.html',
  styleUrls: ['./credtis.component.scss']
})
export class CredtisComponent {
  firstRelease = '11.08.2021 19:21';
  lastUpdate: string;
  constructor() {
    this.lastUpdate ='30.08.2023 20:30';
  }

}
