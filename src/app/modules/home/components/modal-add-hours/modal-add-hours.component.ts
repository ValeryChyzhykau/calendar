import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-add-hours',
  templateUrl: './modal-add-hours.component.html',
  styleUrls: ['./modal-add-hours.component.css']
})
export class ModalAddHoursComponent  {
  constructor(
    public dialogRef: MatDialogRef<ModalAddHoursComponent>,
    private user: UserService
  ) {}
  myForm: FormGroup = new FormGroup({
    number: new FormControl('', [
      Validators.required,
      this.hoursQuanityValidator
    ]),
    date: new FormControl('', [Validators.required, this.DateValidator])
  });
  submit() {
    const title = this.myForm.controls.number.value;
    const date = this.myForm.controls.date.value;
    this.user.sendHours(title, date);
    this.dialogRef.close();
  }

  DateValidator(control: FormControl): { [key: string]: boolean } {
    const val = moment(control.value, 'YYYY-MM-DD', true);
    if (!val.isValid()) {
      return { date: true };
    }
    return null;
  }

  hoursQuanityValidator(control: FormControl): {[key: string]: boolean } {
    if (control.value >= 25) {
      return { number: true };
    }
    return null;
  }
}
