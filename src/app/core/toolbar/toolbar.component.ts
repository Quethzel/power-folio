import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public changeTheme = new EventEmitter<boolean>();
  themeClass: string = 'theme-dark';

  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.themeClass);
  }

  onThemeChange(theme:string) {
    this.themeClass = theme;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
       overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }

  themeToggle() {
    this.isDarkTheme = !this.isDarkTheme;
    this.changeTheme.next(this.isDarkTheme);
  }
}
