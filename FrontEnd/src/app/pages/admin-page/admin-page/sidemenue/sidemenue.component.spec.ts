import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenueComponent } from './sidemenue.component';

describe('SidemenueComponent', () => {
  let component: SidemenueComponent;
  let fixture: ComponentFixture<SidemenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidemenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidemenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
