import { Component, OnInit } from '@angular/core';

import Kiso from '../Lele.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Book(Emailadress,password){


  
    Emailadress=Kiso.push(Emailadress);
    password=Kiso.push(password);
   
  
    console.log(Kiso);

  }
}
