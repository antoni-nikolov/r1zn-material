import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card6 } from './card-6';

describe('Card6', () => {
  let component: Card6;
  let fixture: ComponentFixture<Card6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
