import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CredtisComponent } from 'src/app/components/credtis/credtis.component';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isDarkMode: boolean | undefined;

  constructor(public dialog: MatDialog, private coreService: CoreService) {
    this.coreService.$isDarkMode.subscribe(value => {this.isDarkMode = value});
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDarkMode ? 'theme-dark' : 'theme-light';
  }

  credits($event: any) {
    $event.preventDefault();
    this.dialog.open(CredtisComponent);
  }
  

}
