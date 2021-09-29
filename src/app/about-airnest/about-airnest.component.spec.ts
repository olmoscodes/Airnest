import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAirnestComponent } from './about-airnest.component';

describe('AboutAirnestComponent', () => {
  let component: AboutAirnestComponent;
  let fixture: ComponentFixture<AboutAirnestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAirnestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAirnestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
