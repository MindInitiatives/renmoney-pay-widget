import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataDetails, Employment, ESector } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { RenmoneyPayService } from 'src/app/services/renmoney-pay.service';
declare var $ : any;

@Component({
  selector: 'app-renmoney-pay-edetials',
  templateUrl: './renmoney-pay-edetials.component.html',
  styleUrls: ['./renmoney-pay-edetials.component.css']
})
export class RenmoneyPayEdetialsComponent implements OnInit {

  sectors: ESector[] = [
    { id: 0, name: "Finance" },
    { id: 1, name: "Banking" },
    { id: 2, name: "Charity" }
  ];

  // dataForm : FormGroup
  currentData: Employment;
  previousData : {}
  finalData: DataDetails;
  value : number = 1;

  constructor(private dataService : DataService,
    private renmoneyService : RenmoneyPayService,
    private router: Router) { 
    this.currentData = {};
    this.currentData.employerSector = null;

    this.finalData = {};
   }

  ngOnInit(): void {

    this.dataService.currentdataObject.subscribe(data => {
      if (Object.keys(data).length) {
        this.finalData = data
      }


      else {
        this.finalData = JSON.parse(this.renmoneyService.getCurrentData());
      }
    });
    console.log (this.finalData);
    // this.dataForm = new FormGroup({
    //   employerName: new FormControl('', Validators.required),
    //   employerSector: new FormControl(null, Validators.required),
    //   esd: new FormControl('', Validators.required),
    //   address: new FormControl('', Validators.required),
    //   workEmail: new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //   ])});
      
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
          //     esd: fd
          //  });
          this.currentData.employmentStartDate = fd
            console.log(fd);
        }
      });
    }
  }

  finish () {

    
    if (this.finalData == null) {
      this.finalData = {}
    }

    this.finalData.employment = this.currentData;
    this.dataService.updateData(this.finalData);
    this.renmoneyService.storeCurrentData(this.finalData);
    console.log(this.finalData);

    this.renmoneyService.getData(this.value).subscribe(data => {
      console.log(data)
      alert("Check the Console for the Results. Thank you !!!")

      setTimeout ( ()=> {
        this.renmoneyService.removeCurrentData();
      }, 2000)

      this.router.navigate(['/intro'])
    },
    err => {
      console.log(err);
      return false;
    });

  }

}
