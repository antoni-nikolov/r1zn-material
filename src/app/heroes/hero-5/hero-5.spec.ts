import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero5 } from './hero-5';

describe('Hero5', () => {
  let component: Hero5;
  let fixture: ComponentFixture<Hero5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
