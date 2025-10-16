import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer6 } from './footer-6';

describe('Footer6', () => {
  let component: Footer6;
  let fixture: ComponentFixture<Footer6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
