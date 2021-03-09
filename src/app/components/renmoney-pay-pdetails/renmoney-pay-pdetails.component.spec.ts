import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmoneyPayPdetailsComponent } from './renmoney-pay-pdetails.component';

describe('RenmoneyPayPdetailsComponent', () => {
  let component: RenmoneyPayPdetailsComponent;
  let fixture: ComponentFixture<RenmoneyPayPdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenmoneyPayPdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmoneyPayPdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
