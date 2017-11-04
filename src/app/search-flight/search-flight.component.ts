import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { SearchInfoModel } from '../Model/searchinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  travelinfo:SearchInfoModel;
  startDate;
  minStartDate;
  //myTravilType:any = '';
  fromPlace: FormControl;
  toPlace: FormControl;
  filteredStates: any;
  isRoundTrip

    states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
  ];

  constructor( private router: Router) {
    this.fromPlace = new FormControl();
    this.filteredStates = this.fromPlace.valueChanges.startWith(null).map(name => this.fromFilterStates(name));
    this.toPlace = new FormControl();
    this.filteredStates = this.toPlace.valueChanges.startWith(null).map(name => this.toFilterStates(name));
    this.travelinfo= new SearchInfoModel("","","","",null,null,null,null);
   }
  fromFilterStates(val: string){
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLocaleLowerCase()) === 0): this.states;
  }
  toFilterStates(val: string){
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLocaleLowerCase()) === 0): this.states;
  }
  
  ngOnInit() {
    this.startDate = new Date();
    this.travelinfo.travelType = "1";
    this.isRoundTrip = false;
  }
  private setMinReturnDate($event){
    var value = $event
    this.minStartDate = new Date(value);
  }

  adults = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'}
  ];
  childrens = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'}
  ];

  infants =[
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'}
  ];
  private getSearchData(travelinfo:SearchInfoModel)
  {
    console.log(travelinfo);
    
    this.travelinfo=travelinfo;

    this.router.navigate(['/searchinfo']);

  }
  
  private travelTypeChanged(changedValue){
    if(changedValue == "2"){
      this.isRoundTrip = true;
    }else{
      this.isRoundTrip = false;
    }
  }
}
