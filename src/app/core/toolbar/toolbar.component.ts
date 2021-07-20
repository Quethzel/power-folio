import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() isDarkTheme: boolean = false;
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public changeTheme = new EventEmitter<boolean>();
  
  constructor() { }

  themeToggle() {
    this.isDarkTheme = !this.isDarkTheme;
    this.changeTheme.next(this.isDarkTheme);
  }

}
