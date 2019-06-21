import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadComponent } from './up-load.component';

describe('UpLoadComponent', () => {
  let component: UpLoadComponent;
  let fixture: ComponentFixture<UpLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
