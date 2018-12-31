import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathManagementComponent } from './path-management.component';

describe('PathManagementComponent', () => {
  let component: PathManagementComponent;
  let fixture: ComponentFixture<PathManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
