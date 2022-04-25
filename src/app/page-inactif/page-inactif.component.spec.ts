import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInactifComponent } from './page-inactif.component';

describe('PageInactifComponent', () => {
  let component: PageInactifComponent;
  let fixture: ComponentFixture<PageInactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInactifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
