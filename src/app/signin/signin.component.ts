import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Book(Emailadress,password){


  
    Emailadress=Kiso.push(Emailadress);
    password=Kiso.push(password);
   
  
    console.log(Kiso);
  }

}