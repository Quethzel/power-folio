import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CredtisComponent } from 'src/app/components/credtis/credtis.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isDarkMode: boolean;

  constructor(public dialog: MatDialog) {
    this.isDarkMode = this.isNightTime();
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDarkMode ? 'theme-dark' : 'theme-light';
  }

  onChangeTheme(isDarkTheme: boolean) {
    this.isDarkMode = isDarkTheme;
  }

  credits($event: any) {
    $event.preventDefault();
    this.dialog.open(CredtisComponent);
  }
  
  private isNightTime() {
    const time = new Date().getHours() 
    // return  time < 6 || time > 18;
    return false;
  }


}
