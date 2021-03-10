import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RenmoneyPayService } from 'src/app/services/renmoney-pay.service';

@Component({
  selector: 'app-renmoney-pay-intro',
  templateUrl: './renmoney-pay-intro.component.html',
  styleUrls: ['./renmoney-pay-intro.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RenmoneyPayIntroComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
