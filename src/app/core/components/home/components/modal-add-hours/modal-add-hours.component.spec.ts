import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddHoursComponent } from './modal-add-hours.component';

describe('ModalAddHoursComponent', () => {
  let component: ModalAddHoursComponent;
  let fixture: ComponentFixture<ModalAddHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
