import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataDetails, LEducation, Personal } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { RenmoneyPayService } from 'src/app/services/renmoney-pay.service';
declare var $ : any;

@Component({
  selector: 'app-renmoney-pay-pdetails',
  templateUrl: './renmoney-pay-pdetails.component.html',
  styleUrls: ['./renmoney-pay-pdetails.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RenmoneyPayPdetailsComponent implements OnInit {

  leducations: LEducation[] = [
    { id: 0, name: "Primary" },
    { id: 1, name: "Secondary" },
    { id: 2, name: "Graduate" }
  ];

  dataForm : FormGroup
  currentData: Personal;
  previousData: DataDetails;
  nextData:{};

  constructor(private dataService : DataService,
    private renmoneyService : RenmoneyPayService,
    private router: Router) { 
    this.currentData = {};
    this.currentData.maritalStatus = null;
    this.currentData.levelEducation = null;

    this.previousData = {};
     }

  ngOnInit(): void {

    this.dataService.currentdataObject.subscribe(data => this.nextData = data);
    console.log (this.nextData);

    this.dataService.currentdataObject.subscribe(data => 
      {
      if (Object.keys(data).length) {
        this.previousData = data
      }

      else {
        this.previousData = JSON.parse(this.renmoneyService.getCurrentData());
      }
    });
    console.log (this.previousData);

    

    // this.dataForm = new FormGroup({
    //   option: new FormControl(null, Validators.required),
    //   address: new FormControl('', Validators.required),
    //   dmi: new FormControl('', Validators.required),
    //   maritalStatus: new FormControl(null, Validators.required),
    //   educationLevel: new FormControl(null, Validators.required)});
      
    if ($.fn.datepicker !== undefined) {
      $('.air-datepicker').datepicker({
        language: {
          days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          today: 'Today',
          clear: 'Clear',
          dateFormat: 'dd/mm/yyyy',
          firstDay: 0
        },
        onSelect: (fd, date) => {
          //   this.dataForm.patchValue({
          //     dmi: fd
          //  });
          this.currentData.dateMovedIn = fd
            console.log(fd);
        }
      });
    }
  }

  next() {
    const value = this.currentData

    this.previousData.personal = this.currentData
    // const value = this.dataForm.value;
    // let serializedForm = JSON.stringify(value);
    this.router.navigate(['/employment-details'])
    this.dataService.updateData(this.previousData);
    this.renmoneyService.storeCurrentData(this.previousData);
    console.log(this.previousData);
  }

}
