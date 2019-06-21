import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadComponent } from './down-load.component';

describe('DownLoadComponent', () => {
  let component: DownLoadComponent;
  let fixture: ComponentFixture<DownLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
