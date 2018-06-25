import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-airport-taxis',
  templateUrl: './airport-taxis.component.html',
  styleUrls: ['./airport-taxis.component.css']
})
export class AirportTaxisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Book(PickupLocation,PickupDate,DropoffDate,Time,Passangers){


    PickupLocation=Kiso.push(PickupLocation);
    PickupDate=Kiso.push(PickupDate);
    DropoffDate=Kiso.push(DropoffDate);
    Time=Kiso.push(Time)
    Passangers=Kiso.push(Passangers)
    
  
    console.log(Kiso);
  
  }
}
