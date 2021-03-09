import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmoneyPayEdetialsComponent } from './renmoney-pay-edetials.component';

describe('RenmoneyPayEdetialsComponent', () => {
  let component: RenmoneyPayEdetialsComponent;
  let fixture: ComponentFixture<RenmoneyPayEdetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenmoneyPayEdetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmoneyPayEdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
