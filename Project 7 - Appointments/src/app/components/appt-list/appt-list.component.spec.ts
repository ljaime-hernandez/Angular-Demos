import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptListComponent } from './appt-list.component';

describe('ApptListComponent', () => {
  let component: ApptListComponent;
  let fixture: ComponentFixture<ApptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
