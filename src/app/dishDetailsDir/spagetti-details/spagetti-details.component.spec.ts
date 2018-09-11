import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagettiDetailsComponent } from './spagetti-details.component';

describe('SpagettiDetailsComponent', () => {
  let component: SpagettiDetailsComponent;
  let fixture: ComponentFixture<SpagettiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpagettiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpagettiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
