import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card5 } from './card-5';

describe('Card5', () => {
  let component: Card5;
  let fixture: ComponentFixture<Card5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
