import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageticketComponent } from './pageticket.component';

describe('PageticketComponent', () => {
  let component: PageticketComponent;
  let fixture: ComponentFixture<PageticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
