import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncc } from './ncc';

describe('Ncc', () => {
  let component: Ncc;
  let fixture: ComponentFixture<Ncc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ncc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ncc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
