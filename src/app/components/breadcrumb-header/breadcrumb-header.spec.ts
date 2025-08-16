import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbHeader } from './breadcrumb-header';

describe('BreadcrumbHeader', () => {
  let component: BreadcrumbHeader;
  let fixture: ComponentFixture<BreadcrumbHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
