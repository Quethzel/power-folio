import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  
  isDarkTheme: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  themeToggle() {
    this.isDarkTheme = !this.isDarkTheme;
  }


}
