/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirportTaxisComponent } from './airport-taxis.component';

describe('AirportTaxisComponent', () => {
  let component: AirportTaxisComponent;
  let fixture: ComponentFixture<AirportTaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportTaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportTaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
