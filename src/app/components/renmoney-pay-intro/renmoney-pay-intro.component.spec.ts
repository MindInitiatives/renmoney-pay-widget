import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenmoneyPayIntroComponent } from './renmoney-pay-intro.component';

describe('RenmoneyPayIntroComponent', () => {
  let component: RenmoneyPayIntroComponent;
  let fixture: ComponentFixture<RenmoneyPayIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenmoneyPayIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenmoneyPayIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
