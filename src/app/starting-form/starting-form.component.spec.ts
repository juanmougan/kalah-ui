import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingFormComponent } from './starting-form.component';

describe('StartingFormComponent', () => {
  let component: StartingFormComponent;
  let fixture: ComponentFixture<StartingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
