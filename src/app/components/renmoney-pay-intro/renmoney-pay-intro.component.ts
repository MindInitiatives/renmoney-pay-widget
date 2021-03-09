import { Component, Input, OnInit } from '@angular/core';
import { RenmoneyPayService } from 'src/app/services/renmoney-pay.service';

@Component({
  selector: 'app-renmoney-pay-intro',
  templateUrl: './renmoney-pay-intro.component.html',
  styleUrls: ['./renmoney-pay-intro.component.css']
})
export class RenmoneyPayIntroComponent implements OnInit {
  @Input() location: string;
  @Input() unit: string;
  public errText;
  public weathersubscription;
  public temp: number;
  public desc: string;
  public weatherico: string;
  public country: string;
  public city: string;
  public dt: Date;
  constructor(
    public rs: RenmoneyPayService
  ) { }

  ngOnInit(): void {
  }

}
