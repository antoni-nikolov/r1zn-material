import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer1 } from './footer-1';

describe('Footer1', () => {
  let component: Footer1;
  let fixture: ComponentFixture<Footer1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
