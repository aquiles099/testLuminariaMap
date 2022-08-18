import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLuminairesComponent } from './home-luminaires.component';

describe('HomeLuminairesComponent', () => {
  let component: HomeLuminairesComponent;
  let fixture: ComponentFixture<HomeLuminairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLuminairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLuminairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
