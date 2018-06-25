import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



Book(CurrentLocation,Destination,Depart,Return){


  
  CurrentLocation=Kiso.push(CurrentLocation);
  Destination=Kiso.push(Destination);
  Depart=Kiso.push(Depart);
  Return=Kiso.push(Return);

  console.log(Kiso);


}


}   