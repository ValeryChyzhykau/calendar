import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from '@src/app/core/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-open-data-editing-dialog',
  templateUrl: './open-data-editing-dialog.component.html',
  styleUrls: ['./open-data-editing-dialog.component.scss']
})
export class OpenDataEditingDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {$key: string, title: number, color: string},
    private userService: UserService,
    private dialogRef: MatDialogRef<OpenDataEditingDialogComponent>
  ) {}
  public editHoursForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      this.hoursQuanityValidator
    ])
  });
  public remove() {
    this.userService.removeHours(this.data.$key);
    this.dialogRef.close();
  }
  public change() {
    this.data.title = this.editHoursForm.controls.title.value;
    this.userService.editRecord(this.data);
    this.dialogRef.close();
  }
  private hoursQuanityValidator(control: FormControl): {[key: string]: boolean } {
    if (control.value >= 25) {
      return { number: true };
    }
    return null;
  }
}
