import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutableChildComponent } from './immutable-child.component';

describe('ImmutableChildComponent', () => {
  let component: ImmutableChildComponent;
  let fixture: ComponentFixture<ImmutableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmutableChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmutableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
