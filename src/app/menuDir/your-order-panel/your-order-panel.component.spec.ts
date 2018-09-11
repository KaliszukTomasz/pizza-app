import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderPanelComponent } from './your-order-panel.component';

describe('YourOrderPanelComponent', () => {
  let component: YourOrderPanelComponent;
  let fixture: ComponentFixture<YourOrderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourOrderPanelComponent ]
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
