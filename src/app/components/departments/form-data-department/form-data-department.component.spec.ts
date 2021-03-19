import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataDepartmentComponent } from './form-data-department.component';

describe('FormDataDepartmentComponent', () => {
  let component: FormDataDepartmentComponent;
  let fixture: ComponentFixture<FormDataDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
