import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSpagettiComponent } from './menu-spagetti.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MenuSpagettiComponent', () => {
  let component: MenuSpagettiComponent;
  let fixture: ComponentFixture<MenuSpagettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSpagettiComponent ],
      imports: [ RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSpagettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
