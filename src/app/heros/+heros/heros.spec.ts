import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heros } from './heros';

describe('Heros', () => {
  let component: Heros;
  let fixture: ComponentFixture<Heros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
