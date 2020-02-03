import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-modal-add-hours',
  templateUrl: './modal-add-hours.component.html',
  styleUrls: ['./modal-add-hours.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [ MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS ]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class ModalAddHoursComponent {
  public addHoursForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      this.hoursQuanityValidator
    ]),
    start: new FormControl('', Validators.required)
  });
  constructor(
    private dialogRef: MatDialogRef<ModalAddHoursComponent>,
    private user: UserService
  ) {}
  public submit(): void {
    try {
      if (this.addHoursForm.valid) {
        this.user.sendHours(this.addHoursForm.value);
      }
      this.dialogRef.close();
    } catch (err) {
      alert(err);
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
