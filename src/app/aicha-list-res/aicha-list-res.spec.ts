import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AichaListRes } from './aicha-list-res';

describe('AichaListRes', () => {
  let component: AichaListRes;
  let fixture: ComponentFixture<AichaListRes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AichaListRes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AichaListRes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
