import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushDetectionComponent } from './on-push-detection.component';

describe('OnPushDetectionComponent', () => {
  let component: OnPushDetectionComponent;
  let fixture: ComponentFixture<OnPushDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPushDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
