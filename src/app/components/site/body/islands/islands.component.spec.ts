import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandsComponent } from './islands.component';

describe('IslandsComponent', () => {
  let component: IslandsComponent;
  let fixture: ComponentFixture<IslandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
