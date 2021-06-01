import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployeesComponent } from './count-employees.component';

describe('CountEmployeesComponent', () => {
  let component: CountEmployeesComponent;
  let fixture: ComponentFixture<CountEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
