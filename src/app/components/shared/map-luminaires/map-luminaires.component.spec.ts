import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLuminairesComponent } from './map-luminaires.component';

describe('MapLuminairesComponent', () => {
  let component: MapLuminairesComponent;
  let fixture: ComponentFixture<MapLuminairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLuminairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLuminairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
