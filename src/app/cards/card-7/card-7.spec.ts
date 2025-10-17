import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7 } from './card-7';

describe('Card7', () => {
  let component: Card7;
  let fixture: ComponentFixture<Card7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
