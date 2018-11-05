import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorMapComponent } from './outdoor-map.component';

describe('OutdoorMapComponent', () => {
  let component: OutdoorMapComponent;
  let fixture: ComponentFixture<OutdoorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
