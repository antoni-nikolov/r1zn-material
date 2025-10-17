import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero3 } from './hero-3';

describe('Hero3', () => {
  let component: Hero3;
  let fixture: ComponentFixture<Hero3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
