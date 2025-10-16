import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer4 } from './footer-4';

describe('Footer4', () => {
  let component: Footer4;
  let fixture: ComponentFixture<Footer4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
