import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmoneyPayElcheckComponent } from './Renmoney-pay-elcheck.component';

describe('RenmoneyPayElcheckComponent', () => {
  let component: RenmoneyPayElcheckComponent;
  let fixture: ComponentFixture<RenmoneyPayElcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenmoneyPayElcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmoneyPayElcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
