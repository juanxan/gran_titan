import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetComponent } from './home-det.component';

describe('HomeDetComponent', () => {
  let component: HomeDetComponent;
  let fixture: ComponentFixture<HomeDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
