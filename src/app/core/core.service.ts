import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private isDarkMode = new BehaviorSubject<boolean>(this.isNightTime());
  $isDarkMode = this.isDarkMode.asObservable();
  
  constructor() { }

  setDarkModeTheme(isDarkMode: boolean) {
    this.isDarkMode.next(isDarkMode);
  }

  private isNightTime() {
    const time = new Date().getHours() 
    return  time < 6 || time > 18;
  }
}
