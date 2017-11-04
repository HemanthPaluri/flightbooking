import{Injectable} from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class flightService{

    private jsonFileUrl='./../assets/Dashboard.json';

    constructor(private http: Http){

    }

    private getHeader(){
        let header = new Headers();
        header.append('Accept','application/json');
        return header;
    }

    getFlightInfoOnSearch(){
        
        let flightdetails = this.http.get(this.jsonFileUrl)
        .map((res:Response)=> res.json().FlightData)
        .catch((error:any)=>Observable.throw(error.json()||'ServerError'));
        
        return flightdetails;
    
    }
}