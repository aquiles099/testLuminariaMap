import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraphicsComponent } from './view-graphics.component';

describe('ViewGraphicsComponent', () => {
  let component: ViewGraphicsComponent;
  let fixture: ComponentFixture<ViewGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
