import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShowFlightsComponent } from './show-flights/show-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    ShowFlightsComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdNativeDateModule,
    MdDatepickerModule,
    RouterModule.forRoot([
      {
        path : 'app-search-flight',
        component : SearchFlightComponent
      },
      {
        path: 'searchinfo',
        component: ShowFlightsComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
