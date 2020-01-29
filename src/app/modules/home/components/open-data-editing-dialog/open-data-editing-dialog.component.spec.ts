import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDataEditingDialogComponent } from './open-data-editing-dialog.component';

describe('OpenDataEditingDialogComponent', () => {
  let component: OpenDataEditingDialogComponent;
  let fixture: ComponentFixture<OpenDataEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDataEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDataEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
