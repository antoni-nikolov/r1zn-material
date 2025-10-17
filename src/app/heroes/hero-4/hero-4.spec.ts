import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero4 } from './hero-4';

describe('Hero4', () => {
  let component: Hero4;
  let fixture: ComponentFixture<Hero4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
