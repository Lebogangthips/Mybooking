import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-car-rentals',
  templateUrl: './car-rentals.component.html',
  styleUrls: ['./car-rentals.component.css']
})
export class CarRentalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Book(PickupLocation,PickupDate,DropoffDate){


  PickupLocation=Kiso.push(PickupLocation);
  PickupDate=Kiso.push(PickupDate);
  DropoffDate=Kiso.push(DropoffDate);
  

  console.log(Kiso);
  
  
  }
}
