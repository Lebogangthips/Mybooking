import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

CurrentLocation=Kiso[0]
Destination=Kiso[1]
Depart=Kiso[2]
Return=Kiso[3]

}
