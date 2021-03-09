import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataObject = new BehaviorSubject({});
 currentdataObject = this.dataObject.asObservable();

 constructor() {

 }
 updateData(message: {}) {
 this.dataObject.next(message)
 }
}
