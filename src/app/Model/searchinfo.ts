export class SearchInfoModel {

fromDate:string;
toDate:string;
fromLocation: string;
toLocation: string;
adultPassengersCount:number;
ChildrenPassengersCount:number;
infantsPassengersCount:number;
travelType:any;

constructor(_fromDate:string,_toDate:string,
    _fromLocation: string,
    _toLocation: string,
    _adultPassengersCount:number,
    _ChildrenPassengersCount:number,
    _infantsPassengersCount:number,
    _travelType:any)
    {

        this.fromDate=_fromDate;
        this.toDate=_toDate;
        this.fromLocation=_fromLocation;
        this.toLocation=_toLocation;
        this.adultPassengersCount=_adultPassengersCount;
        this.ChildrenPassengersCount=_ChildrenPassengersCount;
        this.infantsPassengersCount=_infantsPassengersCount;
        this.travelType=_travelType;
    }


}