import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@core/services/user.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-modal-add-hours',
  templateUrl: './modal-add-hours.component.html',
  styleUrls: ['./modal-add-hours.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ModalAddHoursComponent  {
  constructor(
    private dialogRef: MatDialogRef<ModalAddHoursComponent>,
    private user: UserService
  ) {}
  public addHoursForm: FormGroup = new FormGroup({
    number: new FormControl('', [
      Validators.required,
      this.hours_quanity_validator
    ]),
    date: new FormControl('', Validators.required)
  });
  public submit() {
    const title = this.addHoursForm.controls.number.value;
    const date = this.addHoursForm.controls.date.value.format('YYYY-MM-DD');
    this.user.send_hours(title, date);
    this.dialogRef.close();
  }

  private hours_quanity_validator(control: FormControl): {[key: string]: boolean } {
    if (control.value >= 25) {
      return { number: true };
    }
    return null;
  }
}
