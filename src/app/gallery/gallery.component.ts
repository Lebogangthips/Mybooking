import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

 val="Book Now";
 BookNow(){
   if(this.val == "Book Now"){
     this.val = "Booked";

   }
   else{
     this.val = "Book";
   }
 }


  constructor() { }

  ngOnInit() {
  }

}
