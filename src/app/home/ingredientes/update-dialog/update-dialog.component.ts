import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>) {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
