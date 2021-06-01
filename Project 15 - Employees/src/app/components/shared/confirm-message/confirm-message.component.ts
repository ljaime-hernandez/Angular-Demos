import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.css']
})
export class ConfirmMessageComponent {

  message: string;
  btn = 'Accept';

  constructor(public dialogRef: MatDialogRef<ConfirmMessageComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any) {
                this.message = data.message;
              }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
