import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletsListComponent } from './athlets-list.component';

describe('AthletsListComponent', () => {
  let component: AthletsListComponent;
  let fixture: ComponentFixture<AthletsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthletsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthletsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
