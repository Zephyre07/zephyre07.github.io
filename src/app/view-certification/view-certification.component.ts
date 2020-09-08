import { Component, OnInit } from '@angular/core';
import { ComkartServiceService } from '../comkart-service.service';
import { ICurrency } from '../model/ICurrency';
import currJson from '../jsons/currency.json'
import certJson from '../jsons/certificate.json'

@Component({
  selector: 'app-view-certification',
  templateUrl: './view-certification.component.html',
  styleUrls: ['./view-certification.component.css']
})
export class ViewCertificationComponent implements OnInit {

  constructor(private _currencyService:ComkartServiceService) { }

  errorMessage:String;
  currencies: ICurrency[]=[];
  name:string=certJson.employeeName;
  numberOfCertification:number=certJson.certificationList.length;

  ngOnInit(): void {
    console.log("In ngOnit");
    this.onView();
    this.load();
  }

  load():void{
    this.currencies=certJson.certificationList;
    console.log("JSONS:"+ this.currencies);
  }

  onView():void{
    console.log(this._currencyService.onView()._subscribe);

    this._currencyService.onView().subscribe(
      currency=>{
        this.currencies=currency;
        console.log(currency);
      },
      error => this.errorMessage= <any>error
      
    );
  }
}
