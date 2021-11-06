import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNestsComponent } from './our-nests.component';

describe('OurNestsComponent', () => {
  let component: OurNestsComponent;
  let fixture: ComponentFixture<OurNestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurNestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
