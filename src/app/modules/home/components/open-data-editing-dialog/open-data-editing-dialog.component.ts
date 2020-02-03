import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from '@src/app/core/services/user.service';

@Component({
  selector: 'app-open-data-editing-dialog',
  templateUrl: './open-data-editing-dialog.component.html',
  styleUrls: ['./open-data-editing-dialog.component.scss']
})
export class OpenDataEditingDialogComponent {
  public editHoursForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      this.hoursQuanityValidator
    ])
  });
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { $key: string; title: number; color: string },
    private userService: UserService,
    private dialogRef: MatDialogRef<OpenDataEditingDialogComponent>
  ) {}
  public remove(): void {
    this.userService.removeHours(this.data.$key);
    this.dialogRef.close();
  }
  public change():void {
    try {
      this.data.title = this.editHoursForm.controls.title.value;
      this.userService.editRecord(this.data);
      this.dialogRef.close();
    } catch (err) {
      alert(err.message);
    }
  }
  private hoursQuanityValidator(
    control: FormControl
  ): { [key: string]: boolean } {
    if (control.value >= 25) {
      return { number: true };
    }
    return null;
  }
}
