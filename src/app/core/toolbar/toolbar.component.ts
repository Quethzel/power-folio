import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  themeClass: string = 'theme-dark';
  isDarkTheme: boolean | undefined;

  constructor(
    private overlayContainer: OverlayContainer,
    private coreService: CoreService
    ) {
      this.coreService.$isDarkMode.subscribe(val => this.isDarkTheme = val);
    }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
    
  }

  // onThemeChange(theme:string) {
  //   this.themeClass = theme;
  //   const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
  //   const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
  //   if (themeClassesToRemove.length) {
  //      overlayContainerClasses.remove(...themeClassesToRemove);
  //   }
  //   overlayContainerClasses.add(theme);
  // }

  themeToggle() {
    this.isDarkTheme = !this.isDarkTheme;
    this.coreService.setDarkModeTheme(this.isDarkTheme);
  }
}
