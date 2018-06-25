import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { CarRentalsComponent } from './car-rentals/car-rentals.component';
import { AirportTaxisComponent } from './airport-taxis/airport-taxis.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  { path: 'Flights', component: FlightsComponent },
  { path: 'Car rentals',   component:  CarRentalsComponent },
  { path: 'Airport Taxis',   component:  AirportTaxisComponent },
  { path: 'Home',   component:  HomeComponent },
  { path: 'Sign in',  component: SigninComponent }, 
  { path: 'Register',  component: RegisterComponent },
  { path: 'Comfirmation',  component: ComfirmationComponent},
  { path: 'Gallery',  component: GalleryComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    CarRentalsComponent,
    AirportTaxisComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    ComfirmationComponent,
    GalleryComponent,
   
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
