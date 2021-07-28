import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  copied($event: any) {
    if ($event.isSuccess) {
      this.snackBar.open(
        'email copied to clipboard!', undefined, 
        { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 3000 }
      );
    }
  }

}
