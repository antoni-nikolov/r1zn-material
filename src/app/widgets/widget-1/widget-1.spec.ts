import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget1 } from './widget-1';

describe('Widget1', () => {
  let component: Widget1;
  let fixture: ComponentFixture<Widget1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
