import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMuseumComponent } from './map-museum.component';

describe('MapMuseumComponent', () => {
  let component: MapMuseumComponent;
  let fixture: ComponentFixture<MapMuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMuseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
