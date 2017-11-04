import { Component, OnInit } from '@angular/core';
import { flightService } from '../services/flightSearchResponse'

@Component({
  selector: 'app-show-flights',
  templateUrl: './show-flights.component.html',
  styleUrls: ['./show-flights.component.css'],
  providers:[flightService]
})
export class ShowFlightsComponent implements OnInit {

  data:any;
  errorMessage :string;
  constructor(private _flightService: flightService) { }

  ngOnInit() {
    this.Flightsearchinfo();
  }

  Flightsearchinfo(){
  this._flightService.getFlightInfoOnSearch().subscribe(
    response => this.data=response,
    error => this.errorMessage=<any>error);
  }

}
