import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkMode: boolean;

  constructor() {
    this.isDarkMode = this.isNightTime();
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDarkMode ? 'theme-dark' : 'theme-light';
  }

  onChangeTheme(isDarkTheme: boolean) {
    this.isDarkMode = isDarkTheme;
  }
  
  private isNightTime() {
    const time = new Date().getHours() 
    return  time < 6 || time > 18;
  }

}
