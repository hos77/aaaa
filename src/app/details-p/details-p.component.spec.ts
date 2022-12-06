import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPComponent } from './details-p.component';

describe('DetailsPComponent', () => {
  let component: DetailsPComponent;
  let fixture: ComponentFixture<DetailsPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
