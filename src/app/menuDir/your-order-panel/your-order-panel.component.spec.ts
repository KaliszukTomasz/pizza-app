import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderPanelComponent } from './your-order-panel.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('YourOrderPanelComponent', () => {
  let component: YourOrderPanelComponent;
  let fixture: ComponentFixture<YourOrderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOrderPanelComponent ],
      imports: [ RouterTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
