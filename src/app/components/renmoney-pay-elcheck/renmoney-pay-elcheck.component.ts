import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataDetails, Elegibility, Income, LGA, State } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { RenmoneyPayService } from 'src/app/services/renmoney-pay.service';
declare var $ : any;

@Component({
  selector: 'app-Renmoney-pay-elcheck',
  templateUrl: './Renmoney-pay-elcheck.component.html',
  styleUrls: ['./Renmoney-pay-elcheck.component.css']
})

export class RenmoneyPayElcheckComponent implements OnInit {

  incomes: Income[] = [
    { id: 0, amount: 120000 },
    { id: 1, amount: 150000 },
    { id: 2, amount: 220000 },
    { id: 3, amount: 250000 }
  ];

  states: State[] = [
    { id: 0, name: "Lagos" },
    { id: 1, name: "FCT" },
    { id: 2, name: "Oyo" },
    { id: 3, name: "Plateau" }
  ];

  lgas: LGA[] = [
    { id: 0, name: "Kosofe" },
    { id: 1, name: "Lagos Mainland" },
    { id: 2, name: "Lagos Island" },
    { id: 3, name: "Idumota" }
  ];

  employmentStats: string[] = ['Employed', 'Self-Employed'];

  // dataForm : FormGroup
  currentData: Elegibility;
  nextData: DataDetails;
  submitted = false;

  constructor(private dataService : DataService,
    private renmoneyService : RenmoneyPayService,
    private router: Router) { 
    this.currentData = {};
    this.currentData.state = null;
    this.currentData.lga = null;
    this.currentData.monthlyIncome = null;
    this.currentData.gender = null;

    this.nextData = {};
     }

  ngOnInit(): void {
    
    // this.dataForm = new FormGroup({
    //   firstName: new FormControl('', Validators.required),
    //   middleName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   option: new FormControl(null, Validators.required),
    //   state: new FormControl(null, Validators.required),
    //   lga: new FormControl(null, Validators.required),
    //   income: new FormControl(null, Validators.required),
    //   bvn: new FormControl('', Validators.required),
    //   dob: new FormControl('', Validators.required),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //   ]),
    //   phone: new FormControl('', Validators.required),
    //   gender: new FormControl(null, Validators.required)});
      
    
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
          //     dob: fd
          //  });
          this.currentData.dob = fd
            console.log(fd);
        }
      });
    }
  }

  next() {
    this.submitted = true;
    const value = this.currentData

    
    // this.currentData = this.nextData.elegibility
    this.nextData.elegibility = this.currentData;
    // const value = this.dataForm.value;
    // let serializedForm = JSON.stringify(value);
    this.router.navigate(['/personal-details'])
    this.dataService.updateData(this.nextData)
    this.renmoneyService.storeCurrentData(this.nextData);
    // console.log(serializedForm);
    console.log(this.nextData);
  }

}
