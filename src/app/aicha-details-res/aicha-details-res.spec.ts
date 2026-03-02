import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AichaDetailsRes } from './aicha-details-res';

describe('AichaDetailsRes', () => {
  let component: AichaDetailsRes;
  let fixture: ComponentFixture<AichaDetailsRes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AichaDetailsRes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AichaDetailsRes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
