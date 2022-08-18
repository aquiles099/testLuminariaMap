import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGraphicsComponent } from './content-graphics.component';

describe('ContentGraphicsComponent', () => {
  let component: ContentGraphicsComponent;
  let fixture: ComponentFixture<ContentGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
