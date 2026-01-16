import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletsFormComponent } from './athlets-form.component';

describe('AthletsFormComponent', () => {
  let component: AthletsFormComponent;
  let fixture: ComponentFixture<AthletsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthletsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthletsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
