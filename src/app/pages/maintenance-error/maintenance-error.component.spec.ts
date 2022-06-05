import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceErrorComponent } from './maintenance-error.component';

describe('MaintenanceErrorComponent', () => {
  let component: MaintenanceErrorComponent;
  let fixture: ComponentFixture<MaintenanceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
