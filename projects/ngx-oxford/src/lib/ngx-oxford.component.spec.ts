import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOxfordComponent } from './ngx-oxford.component';

describe('NgxOxfordComponent', () => {
  let component: NgxOxfordComponent;
  let fixture: ComponentFixture<NgxOxfordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxOxfordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOxfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
